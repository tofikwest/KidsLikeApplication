import { createAction } from "@reduxjs/toolkit";

export const registerUserRequest = createAction("auth/registerUserRequest");
export const registerUserSuccess = createAction("auth/registerUserSuccess");
export const registerUserError = createAction("auth/registerUserError");

export const loginUserRequest = createAction("auth/loginUserRequest");
export const loginUserSuccess = createAction("auth/loginUserSuccess");
export const loginUserError = createAction("auth/loginUserError");

export const signOutRequest = createAction("auth/signOutRequest");
export const signOutSuccess = createAction("auth/signOutSuccess");
export const signOutError = createAction("auth/signOutError");

export const getCurrentUserRequest = createAction("auth/getCurrentUserRequest");
export const getCurrentUserSuccess = createAction("auth/getCurrentUserSuccess");
export const getCurrentUserError = createAction("auth/getCurrentUserError");

export const setGoogleToken = createAction("auth/setGoogleToken");
