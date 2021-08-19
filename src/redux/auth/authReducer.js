import { combineReducers, createReducer } from "@reduxjs/toolkit";

import {
  registerUserRequest,
  registerUserSuccess,
  registerUserError,
  loginUserRequest,
  loginUserSuccess,
  loginUserError,
  signOutSuccess,
  getCurrentUserSuccess,
  getCurrentUserError,
} from "./authActions";

const initialUserState = {
  name: null,
  email: null,
};

const userReducer = createReducer(initialUserState, {
  [registerUserSuccess]: (_, { payload }) => ({
    name: payload.user.email.split("@")[0],
    email: payload.user.email,
  }),
  [loginUserSuccess]: (_, { payload }) => ({
    name: payload.user.email.split("@")[0],
    email: payload.user.email,
  }),
  [getCurrentUserSuccess]: (_, { payload }) => ({
    name: payload.user.email.split("@")[0],
    email: payload.user.email,
  }),
  [signOutSuccess]: () => initialUserState,
});

const tokenReducer = createReducer(null, {
  [registerUserSuccess]: (_, { payload }) => payload.token,
  [loginUserSuccess]: (_, { payload }) => payload.token,
  [signOutSuccess]: () => null,
});

const isLoadingReducer = createReducer(false, {
  [registerUserRequest]: () => true,
  [registerUserSuccess]: () => false,
  [registerUserError]: () => false,
  [loginUserRequest]: () => true,
  [loginUserSuccess]: () => false,
  [loginUserError]: () => false,
  [signOutSuccess]: () => false,
});

const errorReducer = createReducer(null, {
  [registerUserRequest]: () => null,
  [registerUserError]: (_, { payload }) => payload,
  [loginUserRequest]: () => null,
  [loginUserError]: (_, { payload }) => payload,
  [signOutSuccess]: () => null,
});

const isAuthenticatedReducer = createReducer(false, {
  [registerUserSuccess]: () => true,
  [loginUserSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [registerUserError]: () => false,
  [loginUserError]: () => false,
  [getCurrentUserError]: () => false,
  [signOutSuccess]: () => false,
});

export default combineReducers({
  user: userReducer,
  isAuthenticated: isAuthenticatedReducer,
  token: tokenReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});
