import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { setLastLocation } from "./locationAction";

const initialUserLocation = "/auth";

const currentLocation = createReducer(initialUserLocation, {
  [setLastLocation]: (_, { payload }) => payload,
});
const locationReducer = combineReducers({
  location: currentLocation,
});
export default locationReducer;
