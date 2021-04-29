import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { useSelector, useDispatch } from "react-redux";
import { FormLabel } from "app/components/FormLabel";
import { Input } from "./components/Input";
import { RepoItem } from "./RepoItem";
import { TextButton } from "./components/TextButton";
import {
  selectUsername2,
  selectRepos2,
  selectLoading2,
  selectError2,
} from "./slice/selectors";
import { LoadingIndicator } from "app/components/LoadingIndicator";
import { RepoErrorType } from "./slice/types";
import { useGithubRepoFormSlice } from "./slice/index";

export function Name() {
  const { actions } = useGithubRepoFormSlice();

  const username2 = useSelector(selectUsername2);
  const repos = useSelector(selectRepos2);
  const isLoading = useSelector(selectLoading2);
  const error = useSelector(selectError2);

  const dispatch = useDispatch();

  const onChangeUsername2 = (evt: React.ChangeEvent<HTMLInputElement>) => {
    // if (Number.isInteger(Number(evt.currentTarget.value))) {
    //   dispatch(actions.repoError2);
    //   console.log(error);
    // } else {
    dispatch(actions.changeUsername2(evt.currentTarget.value));
    dispatch(actions.loadRepos2());
    console.log({ user: username2 });
    console.log({ user: repos });
    console.log({ user: isLoading });
    console.log({ user: error });
    // }
  };

  const useEffectOnMount = (effect: React.EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    // When initial state username is not null, submit the form to load repos
    if (username2 && username2.trim().length > 0) {
      dispatch(actions.loadRepos2());
    }
  });

  const onSubmitForm = (evt?: React.FormEvent<HTMLFormElement>) => {
    /* istanbul ignore next  */
    if (evt !== undefined && evt.preventDefault) {
      evt.preventDefault();
    }
  };

  return (
    <Wrapper>
      <FormGroup onSubmit={onSubmitForm}>
        {/* <FormLabel>أكتب الرّقم</FormLabel> */}
        <InputWrapper>
          <Input
            type="text"
            placeholder="الإسم و اللقب"
            value={username2}
            onChange={onChangeUsername2}
          />
          {isLoading && <LoadingIndicator small />}
        </InputWrapper>
      </FormGroup>
    </Wrapper>
  );
}

export const repoErrorText2 = (error: RepoErrorType) => {
  switch (error) {
    case RepoErrorType.USERNAME_EMPTY:
      return "لازمك تكتب الإسم";

    default:
      return "An error has occurred!";
  }
};

const Wrapper = styled.div`
  ${TextButton} {
    margin: 16px 0;
    font-size: 0.875rem;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;

  ${Input} {
    width: ${100 / 3}%;
    margin-right: 0.5rem;
  }
`;

const ErrorText = styled.span`
  color: ${(p) => p.theme.text};
`;

const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  ${FormLabel} {
    margin-bottom: 0.25rem;
    margin-left: 0.125rem;
  }
`;

const List = styled.div``;
