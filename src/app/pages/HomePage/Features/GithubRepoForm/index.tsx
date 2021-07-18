import React, { useEffect } from "react";
import styled from "styled-components/macro";
import { useSelector, useDispatch } from "react-redux";
import { FormLabel } from "app/components/FormLabel";
import { Input } from "./components/Input";
import { RepoItem } from "./RepoItem";
import { TextButton } from "./components/TextButton";
import {
  selectUsername,
  selectRepos,
  selectLoading,
  selectError,
  selectPhone,
  selectLoadingPhone,
  selectPrice,
  selectLoadingCapacity,
  selectLoadingNumberMachine,
  selectNumberMachine,
  selectCapacity,
  selectReposPrice,
  selectLoadingPrice,
  selectErrorPrice,
} from "./slice/selectors";
import { LoadingIndicator } from "app/components/LoadingIndicator";
import { RepoErrorType } from "./slice/types";
import { useGithubRepoFormSlice } from "./slice";

export const GithubRepoForm = (props) => {
  const { actions } = useGithubRepoFormSlice();

  const username = useSelector(selectUsername);
  const phone = useSelector(selectPhone);
  const price = useSelector(selectPrice);
  const numberMachine = useSelector(selectNumberMachine);
  const capacity = useSelector(selectCapacity);
  const repos = useSelector(selectRepos);
  const isLoadingPhone = useSelector(selectLoadingPhone);
  const isLoadingUsername = useSelector(selectLoading);
  const isLoadingPrice = useSelector(selectLoadingPrice);
  const isLoadingNumberMachine = useSelector(selectLoadingNumberMachine);
  const isLoadingCapacity = useSelector(selectLoadingCapacity);
  const error = useSelector(selectError);

  const dispatch = useDispatch();

  const onChangeUsername = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (props.value === "phone") {
      if (Number.isInteger(Number(evt.currentTarget.value))) {
        dispatch(actions.changePhone(evt.currentTarget.value));
        dispatch(actions.loadReposPhone());
      } else {
        dispatch(actions.repoErrorPhone);
      }
    } else if (props.value === "username") {
      dispatch(actions.changeUsername(evt.currentTarget.value));
      dispatch(actions.loadRepos());
    } else if (props.value === "price") {
      if (Number.isInteger(Number(evt.currentTarget.value))) {
        dispatch(actions.changePrice(evt.currentTarget.value));
        dispatch(actions.loadReposPrice());
      } else {
        dispatch(actions.repoErrorPrice);
      }
    } else if (props.value === "numberMachine") {
      if (Number.isInteger(Number(evt.currentTarget.value))) {
        dispatch(actions.changeNumberMachine(evt.currentTarget.value));
        dispatch(actions.loadReposNumberMachine());
      } else {
        dispatch(actions.repoErrorNumberMachine);
      }
    } else if (props.value === "capacity") {
      if (Number.isInteger(Number(evt.currentTarget.value))) {
        dispatch(actions.changeCapacity(evt.currentTarget.value));
        dispatch(actions.loadReposCapacity());
      } else {
        dispatch(actions.repoErrorCapacity);
      }
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
    if (phone && phone.trim().length > 0) {
      dispatch(actions.loadReposPhone());
    }
    if (price && price.trim().length > 0) {
      dispatch(actions.loadReposPrice());
    }
    if (numberMachine && numberMachine.trim().length > 0) {
      dispatch(actions.loadReposNumberMachine());
    }
    if (capacity && capacity.trim().length > 0) {
      dispatch(actions.loadReposCapacity());
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
        {/* <FormLabel>{props.value}</FormLabel> */}
        <InputWrapper>
          <Input
            type="text"
            placeholder={props.placeholder}
            value={
              props.value === "username"
                ? username
                : props.value === "phone"
                ? phone
                : props.value === "price"
                ? price
                : props.value === "numberMachine"
                ? numberMachine
                : props.value === "capacity"
                ? capacity
                : undefined
            }
            onChange={onChangeUsername}
          />
          {props.value === "phone"
            ? isLoadingPhone && <LoadingIndicator small />
            : props.value === "phone"
            ? isLoadingUsername && <LoadingIndicator small />
            : props.value === "price"
            ? isLoadingPrice && <LoadingIndicator small />
            : props.value === "numberMachine"
            ? isLoadingNumberMachine && <LoadingIndicator small />
            : props.value === "capacity"
            ? isLoadingCapacity && <LoadingIndicator small />
            : null}
        </InputWrapper>
      </FormGroup>
    </Wrapper>
  );
};

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
    margin-left: 0.5rem;
    direction: ltr;
    text-align: right;
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
    margin-right: 0.125rem;
  }
`;

const List = styled.div``;
