import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { useSelector, useDispatch } from "react-redux";
import { FormLabel } from "app/components/FormLabel";
import { Input } from "./components/Input";
import { TextButton } from "./components/TextButton";
import {
  selectUsername,
  selectRepos,
  selectLoading,
} from "./slice/selectors";
import { LoadingIndicator } from "app/components/LoadingIndicator";
import { RepoErrorType } from "./slice/types";
import { useGithubRepoFormSlice } from "./slice";

export function GithubRepoForm() {
  const { actions } = useGithubRepoFormSlice();

  const username = useSelector(selectUsername);
  const repos = useSelector(selectRepos);
  const isLoading = useSelector(selectLoading);

  const dispatch = useDispatch();

  const onChangeUsername = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (Number.isInteger(Number(evt.currentTarget.value))) {
      dispatch(actions.changeUsername(evt.currentTarget.value));
      dispatch(actions.loadRepos());
      console.log({ ur: username });
      console.log({ repos: repos });
    } else {
      dispatch(actions.repoError);
    }
  };

  const useEffectOnMount = (effect: React.EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(effect, []);
  };

  useEffectOnMount(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) {
      dispatch(actions.loadRepos());
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
        <FormLabel>أكتب الرّقم</FormLabel>
        <InputWrapper>
          <Input
            type="text"
            placeholder="+216 99 999 999"
            value={username}
            onChange={onChangeUsername}
          />
          {isLoading && <LoadingIndicator small />}
        </InputWrapper>
      </FormGroup>
    </Wrapper>
  );
}

export const repoErrorText = (error: RepoErrorType) => {
  switch (error) {
    case RepoErrorType.USERNAME_EMPTY:
      return "لازمك تكتب رقم";
    case RepoErrorType.USERNAME_NOT_NUMBER:
      return "لازمك تكتب رقم";

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

const FormGroup = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;

  ${FormLabel} {
    margin-bottom: 0.25rem;
    margin-left: 0.125rem;
  }
`;
