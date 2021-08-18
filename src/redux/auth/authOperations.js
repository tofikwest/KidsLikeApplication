import axios from "axios";
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
  console.log("register operation");
  dispatch(registerUserRequest());
  try {
    const response = await axios.post("/users/signup", user);
    idToken.set(response.data.idToken);
    dispatch(registerUserSuccess(response.data));
  } catch (error) {
    dispatch(registerUserError(error.message));
  }
};

export const login = (user) => async (dispatch) => {
  dispatch(loginUserRequest());
  try {
    const response = await axios.post("/users/login", user);
    idToken.set(response.data.idToken);
    dispatch(loginUserSuccess(response.data));
  } catch (error) {
    dispatch(loginUserError(error.message));
  }
};

export const logOut = () => async (dispatch) => {
  dispatch(signOutRequest());
  try {
    await axios.post("/users/logout");
    idToken.unset();
    dispatch(signOutSuccess());
  } catch (error) {
    dispatch(signOutError(error.message));
  }
};

export const getCurrentUser = () => async (dispatch, getState) => {
  const {
    auth: { idToken: persistedToken },
  } = getState();

  if (!persistedToken) {
    return;
  }

  idToken.set(persistedToken);
  dispatch(getCurrentUserRequest());
  try {
    const response = await axios.get("/users/current");
    dispatch(getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(getCurrentUserError(error.message));
  }
};
