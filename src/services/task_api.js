import axios from "axios";

axios.defaults.baseURL = "https://kidslikev1.herokuapp.com";

export const createNewTask = async (task) => {
  try {
    const res = await axios.post("/task", task, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmMyMDg1YmQwOTM2NTI4MTA3Y2UyNzQiLCJzaWQiOiI1ZmMyZDJmY2UxZDIwNTA2NzAyYmRkMjIiLCJpYXQiOjE2MDY2MDM1MTYsImV4cCI6MTYwNjYwNzExNn0.rJ_QjU4KvA76H96RHsvOBChK0Vjbd0NmqjMxdQVJIXA`,
      },
    });

    console.log("res", res);
  } catch (error) {
    throw error;
  }
};

export const getActiveTasks = async () => {
  try {
    const res = await axios.patch("task/active/");
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
