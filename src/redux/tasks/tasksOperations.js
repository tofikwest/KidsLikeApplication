import {
  createNewTask,
  // getActiveTasks,
  setDaysSingleTask,
  toggleStateTask,
} from "../../services/task_api";
import {
  // getTasksRequest,
  // getTasksSuccess,
  // getTasksError,
  createTaskRequest,
  createTaskSuccess,
  createTaskError,
  setDaysTaskRequest,
  setDaysTaskSuccess,
  setDaysTaskError,
  toggleTaskRequest,
  toggleTaskSuccess,
  toggleTaskError,
} from "./tasksAction";

export const createTaskOperation = (task) => async (dispatch, getState) => {
  try {
    dispatch(createTaskRequest());
    const res = await createNewTask(task);

    const newTask = {
      _id: res.data.id,
      days: res.data.days,
      title: res.data.title,
      reward: res.data.reward,
      imageUrl: res.data.imageUrl,
    };

    dispatch(createTaskSuccess({ ...newTask }));
  } catch (error) {
    dispatch(createTaskError(error.message));
  }
};

export const setDaysSingleTaskOperation =
  (taskId, date) => async (dispatch) => {
    try {
      dispatch(setDaysTaskRequest());

      const res = await setDaysSingleTask({ taskId, date });
      dispatch(setDaysTaskSuccess(res.data));
    } catch (error) {
      dispatch(setDaysTaskError(error.message));
    }
  };

export const toggleTaskOperation =
  ({ taskId, date }) =>
  async (dispatch) => {
    try {
      dispatch(toggleTaskRequest());
      const res = await toggleStateTask({ taskId, date });
      dispatch(toggleTaskSuccess(res.data));
    } catch (error) {
      dispatch(toggleTaskError(error.message));
    }
  };
