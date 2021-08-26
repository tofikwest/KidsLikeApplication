import axios from "axios";

axios.defaults.baseURL = "https://kidslikev1.herokuapp.com";

// export const getActiveTasks = async () => {
//   try {
//     return await axios.patch("task/active/");
//   } catch (error) {
//     throw error;
//   }
// };

export const createNewTask = async (task) => {
  try {
    console.log(`task`, task);
    return await axios.post("/task", task);
  } catch (error) {
    throw error;
  }
};

export const setDaysSingleTask = async ({ taskId, date }) => {
  try {
    return await axios.patch(`/task/single-active/${taskId}`, date);
  } catch (error) {
    throw error;
  }
};

export const toggleStateTask = async ({ taskId, date }) => {
  try {
    return await axios.patch(`/task/switch/${taskId}`, date);
  } catch (error) {
    throw error;
  }
};
