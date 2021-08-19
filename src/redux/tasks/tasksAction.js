import { createAction } from "@reduxjs/toolkit";

export const getTasksRequest = createAction("tasks/getTasksRequest");
export const getTasksSuccess = createAction("tasks/getTasksSuccess");
export const getTasksError = createAction("tasks/getTasksError");

export const createTaskRequest = createAction("tasks/createTaskRequest");
export const createTaskSuccess = createAction("tasks/createTaskSuccess");
export const createTaskError = createAction("tasks/createTaskError");

export const setDaysTaskRequest = createAction("tasks/setDaysTaskRequest");
export const setDaysTaskSuccess = createAction("tasks/setDaysTaskSuccess");
export const setDaysTaskError = createAction("tasks/setDaysTaskError");

export const toggleTaskRequest = createAction("tasks/toggleTaskRequest");
export const toggleTaskSuccess = createAction("tasks/toggleTaskSuccess");
export const toggleTaskError = createAction("tasks/toggleTaskError");
