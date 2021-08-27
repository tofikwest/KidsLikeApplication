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
    const response = await loginUser(user);
    idToken.set(response.data.token);
    dispatch(loginUserSuccess(response.data));
  } catch (error) {
    dispatch(loginUserError(error.message));
  }
};

export const logOut = () => async (dispatch) => {
  dispatch(signOutRequest());
  try {
    await logoutUser();
    idToken.unset();
    dispatch(signOutSuccess());
  } catch (error) {
    dispatch(signOutError(error.message));
  }
};

export const getCurrentUserOperation = () => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }
  idToken.set(persistedToken);
  dispatch(getCurrentUserRequest());
  try {
    const response = await getUserInfo();

    dispatch(getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};
