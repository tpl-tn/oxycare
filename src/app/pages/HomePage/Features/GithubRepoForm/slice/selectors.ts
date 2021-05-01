import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "types";
import { initialState } from ".";

// First select the relevant part from the state
const selectDomain = (state: RootState) => state.githubRepoForm || initialState;

export const selectUsername = createSelector(
  [selectDomain],
  (githubRepoFormState) => githubRepoFormState.username
);

export const selectLoading = createSelector(
  [selectDomain],
  (githubRepoFormState) => githubRepoFormState.loading
);

export const selectError = createSelector(
  [selectDomain],
  (githubRepoFormState) => githubRepoFormState.error
);

export const selectRepos = createSelector(
  [selectDomain],
  (githubRepoFormState) => githubRepoFormState.repositories
);
export const selectPhone = createSelector(
  [selectDomain],
  (githubRepoFormState) => githubRepoFormState.phone
);

export const selectLoadingPhone = createSelector(
  [selectDomain],
  (githubRepoFormState) => githubRepoFormState.loadingPhone
);

export const selectErrorPhone = createSelector(
  [selectDomain],
  (githubRepoFormState) => githubRepoFormState.errorPhone
);

export const selectReposPhone = createSelector(
  [selectDomain],
  (githubRepoFormState) => githubRepoFormState.repositoriesPhone
);
export const selectPrice = createSelector(
  [selectDomain],
  (githubRepoFormState) => githubRepoFormState.price
);

export const selectLoadingPrice = createSelector(
  [selectDomain],
  (githubRepoFormState) => githubRepoFormState.loadingPrice
);

export const selectErrorPrice = createSelector(
  [selectDomain],
  (githubRepoFormState) => githubRepoFormState.errorPrice
);

export const selectReposPrice = createSelector(
  [selectDomain],
  (githubRepoFormState) => githubRepoFormState.repositoriesPrice
);
export const selectNumberMachine = createSelector(
  [selectDomain],
  (githubRepoFormState) => githubRepoFormState.numberMachine
);

export const selectLoadingNumberMachine = createSelector(
  [selectDomain],
  (githubRepoFormState) => githubRepoFormState.loadingNumberMachine
);

export const selectErrorNumberMachine = createSelector(
  [selectDomain],
  (githubRepoFormState) => githubRepoFormState.errorNumberMachine
);

export const selectReposNumberMachine = createSelector(
  [selectDomain],
  (githubRepoFormState) => githubRepoFormState.repositoriesNumberMachine
);

export const selectCapacity = createSelector(
  [selectDomain],
  (githubRepoFormState) => githubRepoFormState.capacity
);

export const selectLoadingCapacity = createSelector(
  [selectDomain],
  (githubRepoFormState) => githubRepoFormState.loadingCapacity
);

export const selectErrorCapacity = createSelector(
  [selectDomain],
  (githubRepoFormState) => githubRepoFormState.errorCapacity
);

export const selectReposCapacity = createSelector(
  [selectDomain],
  (githubRepoFormState) => githubRepoFormState.repositoriesCapacity
);
