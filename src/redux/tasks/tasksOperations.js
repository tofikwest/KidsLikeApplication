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
      console.log(`object`, { taskId, date });
      const res = await toggleStateTask({ taskId, date });
      console.log(`res`, res);
      dispatch(toggleTaskSuccess(res.data));
    } catch (error) {
      dispatch(toggleTaskError(error.message));
    }
  };
