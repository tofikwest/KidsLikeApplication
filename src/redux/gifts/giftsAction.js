import { createAction } from "@reduxjs/toolkit";

export const getGifstRequest = createAction("tasks/getGifstRequest");
export const getGiftsSuccess = createAction("tasks/getGiftsSuccess");
export const getGiftsError = createAction("tasks/getGiftsError");

export const buyGiftsRequest = createAction("tasks/buyGiftsRequest");
export const buyGiftsSuccess = createAction("tasks/buyGiftsSuccess");
export const buyGiftsError = createAction("tasks/buyGiftsError");
