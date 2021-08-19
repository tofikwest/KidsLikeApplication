import { combineReducers, createReducer } from "@reduxjs/toolkit";

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
  getCurrentUserSuccess,
  getCurrentUserError,
} from "./authActions";

const initialUserState = {
  name: null,
  email: null,
};

const user = createReducer(initialUserState, {
  [registerUserSuccess]: (_, { payload }) => payload,
  [loginUserSuccess]: (_, { payload }) => payload,
  [signOutSuccess]: () => initialUserState,
  [getCurrentUserSuccess]: (_, { payload }) => payload,
});
const token = createReducer(null, {
  [registerUserSuccess]: (_, { payload }) => payload.token,
  [loginUserSuccess]: (_, { payload }) => payload.token,
  [signOutSuccess]: () => null,
});

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

const isAuthenticated = createReducer(false, {
  [registerUserSuccess]: () => true,
  [loginUserSuccess]: () => true,
  [getCurrentUserSuccess]: () => true,
  [registerUserError]: () => false,
  [loginUserError]: () => false,
  [getCurrentUserError]: () => false,
  [signOutSuccess]: () => false,
});

export default combineReducers({
  user,
  isAuthenticated,
  token,
  loading,
  error,
});
