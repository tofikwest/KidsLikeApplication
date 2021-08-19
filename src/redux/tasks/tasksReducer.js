import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  createTaskRequest,
  createTaskSuccess,
  createTaskError,
  daysProvidedTaskRequest,
  daysProvidedTaskSuccess,
  daysProvidedTaskError,
  toggleTaskRequest,
  toggleTaskSuccess,
  toggleTaskError,
} from "./tasksAction";

const itemsReducer = createReducer([], {
  [createTaskSuccess]: (_, { payload }) =>
    console.log("createTaskSuccess", payload),
  [toggleTaskSuccess]: (_, { payload }) =>
    console.log("toggleTaskSuccess", payload),
  [daysProvidedTaskSuccess]: (_, { payload }) =>
    console.log("daysProvidedTaskSuccess", payload),
  //   [signOutUser]: () => [],
});

const isLoadingReducer = createReducer(false, {
  [createTaskRequest]: () => true,
  [createTaskSuccess]: () => false,
  [createTaskError]: () => false,
  [toggleTaskRequest]: () => true,
  [toggleTaskSuccess]: () => false,
  [toggleTaskError]: () => false,
  [daysProvidedTaskRequest]: () => true,
  [daysProvidedTaskSuccess]: () => false,
  [daysProvidedTaskError]: () => false,
  //   [signOutUser]: () => false,
});

const errorReducer = createReducer("", {
  [createTaskRequest]: () => "",
  [createTaskError]: (_, { payload }) => payload,
  [toggleTaskRequest]: () => "",
  [toggleTaskError]: (_, { payload }) => payload,
  [daysProvidedTaskRequest]: () => "",
  [daysProvidedTaskError]: (_, { payload }) => payload,
  //   [signOutUser]: () => "",
});

const tasksReducer = combineReducers({
  items: itemsReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});

export default tasksReducer;
