import { createSlice } from "utils/@reduxjs/toolkit";
import { useInjectReducer } from "utils/redux-injectors";
import { AuthState } from "./types";

const initialState: AuthState = {
  loggedIn: false,
  user: null,
};
export const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loggedIn: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("userData", action.payload);
      state.loggedIn = true;
      state.user = action.payload;
    },
    loggedOut: (state) => {
      console.log("logout");
      state.loggedIn = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  actions: { loggedIn, loggedOut },
  reducer,
} = slice;
export const useAuthSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  // useInjectSaga({ key: slice.name, saga: githubRepoFormSaga });
  return { actions: slice.actions };
};
