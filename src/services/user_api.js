import axios from "axios";

axios.defaults.baseURL = "https://kidslikev1.herokuapp.com";

export const getUserInfo = async () => {
  try {
    return await axios.get("/user/info");
  } catch (error) {
    throw error;
  }
};
