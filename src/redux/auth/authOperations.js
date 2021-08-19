import axios from "axios";
import { loginUser, logoutUser, registerUser } from "../../services/auth_api";
import { getUserInfo } from "../../services/user_api";
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
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from "./authActions";

axios.defaults.baseURL = "https://kidslikev1.herokuapp.com";

const idToken = {
  set(idToken) {
    axios.defaults.headers.common.Authorization = `Bearer ${idToken}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const register = (user) => async (dispatch) => {
  dispatch(registerUserRequest());
  try {
    // const response = await axios.post("/auth/register", user);
    const response = await registerUser(user);
    idToken.set(response.data.token);
    dispatch(registerUserSuccess(response.data));
  } catch (error) {
    dispatch(registerUserError(error.message));
  }
};

export const login = (user) => async (dispatch) => {
  dispatch(loginUserRequest());
  try {
    // const response = await axios.post("/auth/login", user);
    const response = await loginUser(user);
    console.log("response loginUser", response);
    idToken.set(response.data.token);
    dispatch(loginUserSuccess(response.data));
  } catch (error) {
    dispatch(loginUserError(error.message));
  }
};

export const googleLogin = () => async (dispatch, getState) => {
  //   const {
  //     tokens: { idToken: persistedToken },
  //   } = getState();

  //   if (!persistedToken) {
  //     return;
  //   }
  //   idToken.set(persistedToken);
  dispatch(loginUserRequest());
  try {
    const response = await axios.get("/auth/google");
    console.log(`response`, response);
    dispatch(loginUserSuccess(response.data));
  } catch (error) {
    dispatch(loginUserError(error.message));
    console.log(`error`, error);
  }
};

export const logOut = () => async (dispatch) => {
  dispatch(signOutRequest());
  try {
    // await axios.post("/auth/logout");
    logoutUser();
    idToken.unset();
    dispatch(signOutSuccess());
  } catch (error) {
    dispatch(signOutError(error.message));
  }
};

export const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: {
      tokens: { idToken: persistedToken },
    },
  } = getState();

  if (!persistedToken) {
    return;
  }

  idToken.set(persistedToken);
  dispatch(getCurrentUserRequest());
  try {
    // const response = await axios.get("/user/info");
    const response = getUserInfo();
    dispatch(getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};
