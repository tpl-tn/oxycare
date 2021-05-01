import { Repo } from "types/Repo";

/* --- STATE --- */
export interface GithubRepoFormState {
  username: string;
  loading: boolean;
  error?: RepoErrorType | null;
  repositories: Repo[];
  phone: string;
  loadingPhone: boolean;
  errorPhone?: RepoErrorType | null;
  repositoriesPhone: Repo[];
  price: string;
  loadingPrice: boolean;
  errorPrice?: RepoErrorType | null;
  repositoriesPrice: Repo[];
  numberMachine: string;
  loadingNumberMachine: boolean;
  errorNumberMachine?: RepoErrorType | null;
  repositoriesNumberMachine: Repo[];
  capacity: string;
  loadingCapacity: boolean;
  errorCapacity?: RepoErrorType | null;
  repositoriesCapacity: Repo[];
}

export enum RepoErrorType {
  RESPONSE_ERROR = 1,
  USER_NOT_FOUND = 2,
  USERNAME_EMPTY = 3,

  USER_HAS_NO_REPO = 4,
  GITHUB_RATE_LIMIT = 5,
  USERNAME_NOT_NUMBER = 6,
}

/* 
  If you want to use 'ContainerState' keyword everywhere in your feature folder, 
  instead of the 'HomePageState' keyword.
*/
export type ContainerState = GithubRepoFormState;
