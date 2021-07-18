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

  phone: "",
  repositoriesPhone: [],
  loadingPhone: false,
  errorPhone: null,
  price: "",
  repositoriesPrice: [],
  loadingPrice: false,
  errorPrice: null,
  numberMachine: "",
  repositoriesNumberMachine: [],
  loadingNumberMachine: false,
  errorNumberMachine: null,
  capacity: "",
  repositoriesCapacity: [],
  loadingCapacity: false,
  errorCapacity: null,
};

const slice = createSlice({
  name: "githubRepoForm",
  initialState,
  reducers: {
    changeUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
      console.log({ ste: state.repositories });
    },
    loadRepos(state) {
      state.loading = true;
      state.error = null;
      [...state.repositories] = [];
    },
    reposLoaded(state, action: PayloadAction<Repo[]>) {
      const repos = action.payload;
      [...state.repositories] = repos;
      state.loading = false;
    },
    repoError(state, action: PayloadAction<RepoErrorType>) {
      state.error = action.payload;
      state.loading = false;
    },

    changePhone(state, action: PayloadAction<string>) {
      console.log(action.payload);
      state.phone = action.payload;
    },
    loadReposPhone(state) {
      state.loadingPhone = true;
      state.errorPhone = null;
      [...state.repositoriesPhone] = [];
    },
    reposLoadedPhone(state, action: PayloadAction<Repo[]>) {
      const repos = action.payload;
      [...state.repositoriesPhone] = repos;
      state.loadingPhone = false;
    },
    repoErrorPhone(state, action: PayloadAction<RepoErrorType>) {
      state.errorPhone = action.payload;
      state.loadingPhone = false;
    },
    changePrice(state, action: PayloadAction<string>) {
      console.log(action.payload);
      state.price = action.payload;
    },
    loadReposPrice(state) {
      state.loadingPrice = true;
      state.errorPrice = null;
      [...state.repositoriesPrice] = [];
    },
    reposLoadedPrice(state, action: PayloadAction<Repo[]>) {
      const repos = action.payload;
      [...state.repositoriesPrice] = repos;
      state.loadingPrice = false;
    },
    repoErrorPrice(state, action: PayloadAction<RepoErrorType>) {
      state.errorPrice = action.payload;
      state.loadingPrice = false;
    },
    changeNumberMachine(state, action: PayloadAction<string>) {
      console.log(action.payload);
      state.numberMachine = action.payload;
    },
    loadReposNumberMachine(state) {
      state.loadingNumberMachine = true;
      state.errorNumberMachine = null;
      [...state.repositoriesNumberMachine] = [];
    },
    reposLoadedNumberMachine(state, action: PayloadAction<Repo[]>) {
      const repos = action.payload;
      [...state.repositoriesNumberMachine] = repos;
      state.loadingNumberMachine = false;
    },
    repoErrorNumberMachine(state, action: PayloadAction<RepoErrorType>) {
      state.errorNumberMachine = action.payload;
      state.loadingNumberMachine = false;
    },
    changeCapacity(state, action: PayloadAction<string>) {
      console.log(action.payload);
      state.capacity = action.payload;
    },
    loadReposCapacity(state) {
      state.loadingCapacity = true;
      state.errorCapacity = null;
      [...state.repositoriesCapacity] = [];
    },
    reposLoadedCapacity(state, action: PayloadAction<Repo[]>) {
      const repos = action.payload;
      [...state.repositoriesCapacity] = repos;
      state.loadingCapacity = false;
    },
    repoErrorCapacity(state, action: PayloadAction<RepoErrorType>) {
      state.errorCapacity = action.payload;
      state.loadingCapacity = false;
    },
  },
});

export const { actions: githubRepoFormActions, reducer } = slice;

export const useGithubRepoFormSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: githubRepoFormSaga });
  return { actions: slice.actions };
};
