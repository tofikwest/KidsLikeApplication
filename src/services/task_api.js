import axios from "axios";

axios.defaults.baseURL = "https://kidslikev1.herokuapp.com";

export const getActiveTasks = async () => {
  try {
    const res = await axios.patch("task/active/");
    console.log("res", res);
  } catch (error) {
    throw error;
  }
};

export const createNewTask = async (task) => {
  try {
    const res = await axios.post("/task", task);
    console.log("res", res);
  } catch (error) {
    throw error;
  }
};

export const setDaysSingleTask = async (taskId) => {
  try {
    const res = await axios.patch(`task/single-active/${taskId}`);
    console.log("res", res);
  } catch (error) {
    throw error;
  }
};

export const toggleStateTask = async (taskId) => {
  try {
    const res = await axios.patch(`/task/switch/${taskId}`);
    console.log("res", res);
  } catch (error) {
    throw error;
  }
};
