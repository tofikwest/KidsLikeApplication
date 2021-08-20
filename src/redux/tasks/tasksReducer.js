import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  getCurrentUserSuccess,
  loginUserSuccess,
  registerUserSuccess,
  signOutSuccess,
} from "../auth/authActions";
import {
  getTasksRequest,
  getTasksSuccess,
  getTasksError,
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

const itemsReducer = createReducer([], {
  [registerUserSuccess]: (_, { payload }) => payload.week.tasks,
  [loginUserSuccess]: (_, { payload }) => payload.week.tasks,
  [getCurrentUserSuccess]: (_, { payload }) => payload.week.tasks,
  [getTasksSuccess]: (_, { payload }) => payload,
  [createTaskSuccess]: (state, { payload }) => [...state, payload],
  [setDaysTaskSuccess]: (state, { payload }) =>
    state.map((task) =>
      task._id === payload.updatedTask.id
        ? { ...task, days: payload.updatedTask.days }
        : task
    ),
  [toggleTaskSuccess]: (state, { payload }) =>
    state.map((task) =>
      task._id === payload.updatedTask.id
        ? { ...task, days: payload.updatedTask.days }
        : task
    ),
  [signOutSuccess]: () => [],
});

const isLoadingReducer = createReducer(false, {
  [getTasksRequest]: () => true,
  [getTasksSuccess]: () => false,
  [getTasksError]: () => false,
  [createTaskRequest]: () => true,
  [createTaskSuccess]: () => false,
  [createTaskError]: () => false,
  [setDaysTaskRequest]: () => true,
  [setDaysTaskSuccess]: () => false,
  [setDaysTaskError]: () => false,
  [toggleTaskRequest]: () => true,
  [toggleTaskSuccess]: () => false,
  [toggleTaskError]: () => false,
  [signOutSuccess]: () => false,
});

const errorReducer = createReducer("", {
  [getTasksRequest]: () => "",
  [getTasksError]: (_, { payload }) => payload,
  [createTaskRequest]: () => "",
  [createTaskError]: (_, { payload }) => payload,
  [setDaysTaskRequest]: () => "",
  [setDaysTaskError]: (_, { payload }) => payload,
  [toggleTaskRequest]: () => "",
  [toggleTaskError]: (_, { payload }) => payload,
  [signOutSuccess]: () => "",
});

const tasksReducer = combineReducers({
  items: itemsReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});

export default tasksReducer;
