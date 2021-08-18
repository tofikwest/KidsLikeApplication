import axios from "axios";

axios.defaults.baseURL = "https://kidslikev1.herokuapp.com";

export const getUserInfo = async () => {
  try {
    const res = await axios.get("/user/info");
    console.log("res", res);
  } catch (error) {
    throw error;
  }
};
