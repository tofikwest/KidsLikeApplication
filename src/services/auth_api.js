import axios from "axios";

axios.defaults.baseURL = "https://kidslikev1.herokuapp.com";

export const registerUser = async (user) => {
  try {
    return await axios.post("/auth/register", user);
  } catch (error) {
    throw error;
  }
};

export const loginUser = async (user) => {
  try {
    return await axios.post("/auth/login", user);
  } catch (error) {
    throw error;
  }
};

export const logoutUser = async () => {
  try {
    return await axios.post("/auth/logout");
  } catch (error) {
    throw error;
  }
};
