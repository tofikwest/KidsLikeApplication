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

// export const getTasksOperation = () => async (dispatch, getState) => {
//   try {
//     dispatch(getTasksRequest());
//     const res = await getActiveTasks();
//     dispatch(getTasksSuccess(res));
//   } catch (error) {
//     dispatch(getTasksError(error.message));
//   }
// };

export const createTaskOperation = (task) => async (dispatch, getState) => {
  try {
    dispatch(createTaskRequest());
    const res = await createNewTask(task);
    dispatch(createTaskSuccess({ ...res }));
  } catch (error) {
    dispatch(createTaskError(error.message));
  }
};

export const setDaysSingleTaskOperation =
  ({ taskId, date }) =>
  async (dispatch, getState) => {
    try {
      dispatch(setDaysTaskRequest());
      const res = await setDaysSingleTask({ taskId, date });
      dispatch(setDaysTaskSuccess(res));
    } catch (error) {
      dispatch(setDaysTaskError(error.message));
    }
  };

export const toggleTaskOperation =
  ({ taskId, date }) =>
  async (dispatch, getState) => {
    try {
      dispatch(toggleTaskRequest());
      const res = await toggleStateTask({ taskId, date });
      dispatch(toggleTaskSuccess(res));
    } catch (error) {
      dispatch(toggleTaskError(error.message));
    }
  };
