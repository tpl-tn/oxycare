import { call, put, select, takeLatest, delay } from "redux-saga/effects";
import { request } from "utils/request";
import { selectUsername, selectUsername2 } from "./selectors";
import { githubRepoFormActions as actions } from ".";
import { Repo } from "types/Repo";
import { RepoErrorType } from "./types";

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  yield delay(500);
  // Select username from store
  const username: string = yield select(selectUsername);
  const username2: string = yield select(selectUsername2);
  if (username.length === 0) {
    yield put(actions.repoError(RepoErrorType.USERNAME_EMPTY));
    return;
  }
  if (username2.length === 0) {
    yield put(actions.repoError2(RepoErrorType.USERNAME_EMPTY));
    return;
  }
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;
  const requestURL2 = `https://api.github.com/users/${username2}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos: Repo[] = yield call(request, requestURL);
    const repos2: Repo[] = yield call(request, requestURL2);
    if (repos?.length > 0) {
      yield put(actions.reposLoaded(repos));
    } else {
      yield put(actions.repoError(RepoErrorType.USER_HAS_NO_REPO));
    }
    if (repos2?.length > 0) {
      yield put(actions.reposLoaded2(repos2));
    } else {
      yield put(actions.repoError2(RepoErrorType.USER_HAS_NO_REPO));
    }
  } catch (err) {
    if (err.response?.status === 404) {
      yield put(actions.repoError(RepoErrorType.USER_NOT_FOUND));
      yield put(actions.repoError2(RepoErrorType.USER_NOT_FOUND));
    } else if (err.message === "Failed to fetch") {
      yield put(actions.repoError(RepoErrorType.GITHUB_RATE_LIMIT));
      yield put(actions.repoError2(RepoErrorType.GITHUB_RATE_LIMIT));
    } else {
      yield put(actions.repoError(RepoErrorType.RESPONSE_ERROR));
      yield put(actions.repoError2(RepoErrorType.RESPONSE_ERROR));
    }
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* githubRepoFormSaga() {
  // Watches for loadRepos actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(actions.loadRepos.type, getRepos);
}
