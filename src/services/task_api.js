import axios from "axios";

axios.defaults.baseURL = "https://kidslikev1.herokuapp.com";

export const createNewTask = async (task) => {
  try {
    const res = await axios.post("/task", task);
    console.log("res", res);
  } catch (error) {
    throw error;
  }
};

export const toggleStateTask = async (id) => {
  try {
    const res = await axios.patch(`/task/switch/${id}`);
    console.log("res", res.data);
  } catch (error) {
    throw error;
  }
};
