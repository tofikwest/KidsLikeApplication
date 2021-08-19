import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { signOutSuccess } from "../auth/authActions";
import {
  buyGiftsError,
  buyGiftsRequest,
  buyGiftsSuccess,
  getGifstRequest,
  getGiftsError,
  getGiftsSuccess,
} from "./giftsAction";

const itemsReducer = createReducer([], {
  [getGiftsSuccess]: (_, { payload }) => payload,
  [buyGiftsSuccess]: (_, { payload }) => payload,
  [signOutSuccess]: () => [],
});

const isLoadingReducer = createReducer(false, {
  [getGifstRequest]: () => true,
  [getGiftsSuccess]: () => false,
  [getGiftsError]: () => false,
  [buyGiftsRequest]: () => true,
  [buyGiftsSuccess]: () => false,
  [buyGiftsError]: () => false,
  [signOutSuccess]: () => false,
});

const errorReducer = createReducer("", {
  [getGifstRequest]: () => "",
  [getGiftsError]: (_, { payload }) => payload,
  [buyGiftsRequest]: () => "",
  [buyGiftsError]: (_, { payload }) => payload,
  [signOutSuccess]: () => "",
});

const giftsReducer = combineReducers({
  items: itemsReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});

export default giftsReducer;
