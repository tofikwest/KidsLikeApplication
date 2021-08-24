import { createAction } from "@reduxjs/toolkit";

export const getGiftsRequest = createAction("awards/getGiftsRequest");
export const getGiftsSuccess = createAction("awards/getGiftsSuccess");
export const getGiftsError = createAction("awards/getGiftsError");

export const buyGiftsRequest = createAction("awards/buyGiftsRequest");
export const buyGiftsSuccess = createAction("awards/buyGiftsSuccess");
export const buyGiftsError = createAction("awards/buyGiftsError");

export const toggleAwardSuccess = createAction("awards/toggleAwardSuccess");
