import { createReducer } from "@reduxjs/toolkit";
import { setSelectedDateId } from "./planningTasksAction";

export const selectPlanningDateReducer = createReducer("default", {
  [setSelectedDateId]: (_, { payload }) => payload,
});
