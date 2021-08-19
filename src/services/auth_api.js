import axios from "axios";

const baseURL = "https://kidslikev1.herokuapp.com/";

export const registerUser = async (user) => {
  try {
    const res = await axios.post(baseURL + "/auth/register", user);
    console.log("res", res);
  } catch (error) {
    throw error;
  }
};
