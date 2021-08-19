import { createReducer } from "@reduxjs/toolkit";
import { setLastLocation } from "./locationAction";

const initialUserLocation = {};

export const locationReducer = createReducer(initialUserLocation, {
  [setLastLocation]: (_, { payload }) => payload,
});
