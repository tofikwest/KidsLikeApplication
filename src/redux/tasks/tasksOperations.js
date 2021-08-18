import { createNewTask } from "../../services/task_api";
import {
  createTaskError,
  createTaskRequest,
  createTaskSuccess,
} from "./tasksAction";

export const createTaskOperation = (task) => async (dispatch, getState) => {
  try {
    dispatch(createTaskRequest());
    //запрос к backend на добавление одного контакта, возвращает id
    const res = await createNewTask(task);
    //обоновляем state c id контакта, полученного из базы
    dispatch(createTaskSuccess({ ...res }));
  } catch (error) {
    dispatch(createTaskError(error.message));
  }
};
