import { combineReducers, createReducer } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

import {
  registerUserRequest,
  registerUserSuccess,
  registerUserError,
  loginUserRequest,
  loginUserSuccess,
  loginUserError,
  signOutRequest,
  signOutSuccess,
  signOutError,
} from "./authActions";

const authReducerPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["idToken"],
};

const tokensReducer = createReducer(
  {
    idToken: "",
    refreshToken: "",
  },
  {
    [registerUserSuccess]: (_, { payload }) => ({
      idToken: payload.idToken,
      refreshToken: payload.refreshToken,
    }),
    [loginUserSuccess]: (_, { payload }) => ({
      idToken: payload.idToken,
      refreshToken: payload.refreshToken,
    }),
    [signOutSuccess]: () => ({
      idToken: "",
      refreshToken: "",
    }),
  }
);
const loading = createReducer(false, {
  [registerUserRequest]: () => true,
  [registerUserSuccess]: () => false,
  [registerUserError]: () => false,
  [loginUserRequest]: () => true,
  [loginUserSuccess]: () => false,
  [loginUserError]: () => false,
  [signOutRequest]: () => true,
  [signOutSuccess]: () => false,
  [signOutError]: () => false,
});

const setError = (_, { payload }) => payload;
const resetError = () => null;

const error = createReducer(null, {
  [registerUserRequest]: resetError,
  [registerUserError]: setError,
  [loginUserRequest]: resetError,
  [loginUserError]: setError,
  [signOutRequest]: resetError,
  [signOutError]: setError,
});

const authReducer = combineReducers({
  tokens: persistReducer(authReducerPersistConfig, tokensReducer),
  loading,
  error,
});

export default authReducer;
