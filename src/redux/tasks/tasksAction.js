import { createAction } from "@reduxjs/toolkit";

export const createTaskRequest = createAction("tasks/addTaskRequest");
export const createTaskSuccess = createAction("tasks/addTaskError");
export const createTaskError = createAction("tasks/addTaskError");

export const toggleTaskRequest = createAction("tasks/toggleTaskRequest");
export const toggleTaskSuccess = createAction("tasks/toggleTaskError");
export const toggleTaskError = createAction("tasks/toggleTaskError");

export const daysProvidedTaskRequest = createAction("tasks/addTaskRequest");
export const daysProvidedTaskSuccess = createAction("tasks/addTaskError");
export const daysProvidedTaskError = createAction("tasks/addTaskError");
