import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  buyGiftsError,
  buyGiftsRequest,
  buyGiftsSuccess,
  getGifstRequest,
  getGiftsError,
  getGiftsSuccess,
} from "./giftsAction";

const itemsReducer = createReducer([], {
  [getGiftsSuccess]: (_, { payload }) =>
    console.log("getGiftsSuccess", payload),
  [buyGiftsSuccess]: (_, { payload }) =>
    console.log("buyGiftsSuccess", payload),
  //   [signOutUser]: () => [],
});

const isLoadingReducer = createReducer(false, {
  [getGifstRequest]: () => true,
  [getGiftsSuccess]: () => false,
  [getGiftsError]: () => false,
  [buyGiftsRequest]: () => true,
  [buyGiftsSuccess]: () => false,
  [buyGiftsError]: () => false,
  //   [signOutUser]: () => false,
});

const errorReducer = createReducer("", {
  [getGifstRequest]: () => "",
  [getGiftsError]: (_, { payload }) => payload,
  [buyGiftsRequest]: () => "",
  [buyGiftsError]: (_, { payload }) => payload,
  //   [signOutUser]: () => "",
});

const giftsReducer = combineReducers({
  items: itemsReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});

export default giftsReducer;
