import { PayloadAction } from "@reduxjs/toolkit";
import { Repo } from "types/Repo";
import { createSlice } from "utils/@reduxjs/toolkit";
import { useInjectReducer, useInjectSaga } from "utils/redux-injectors";
import { githubRepoFormSaga } from "./saga";
import { GithubRepoFormState, RepoErrorType } from "./types";

export const initialState: GithubRepoFormState = {
  username: "",
  repositories: [],
  loading: false,
  error: null,

  username2: "",
  repositories2: [],
  loading2: false,
  error2: null,
};

const slice = createSlice({
  name: "githubRepoForm",
  initialState,
  reducers: {
    changeUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    loadRepos(state) {
      state.loading = true;
      state.error = null;
      state.repositories = [];
    },
    reposLoaded(state, action: PayloadAction<Repo[]>) {
      const repos = action.payload;
      state.repositories = repos;
      state.loading = false;
    },
    repoError(state, action: PayloadAction<RepoErrorType>) {
      state.error = action.payload;
      state.loading = false;
    },

    changeUsername2(state, action: PayloadAction<string>) {
      state.username2 = action.payload;
    },
    loadRepos2(state) {
      state.loading2 = true;
      state.error2 = null;
      state.repositories2 = [];
    },
    reposLoaded2(state, action: PayloadAction<Repo[]>) {
      const repos = action.payload;
      state.repositories2 = repos;
      state.loading2 = false;
    },
    repoError2(state, action: PayloadAction<RepoErrorType>) {
      state.error2 = action.payload;
      state.loading2 = false;
    },
  },
});

export const { actions: githubRepoFormActions, reducer } = slice;

export const useGithubRepoFormSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: githubRepoFormSaga });
  return { actions: slice.actions };
};
