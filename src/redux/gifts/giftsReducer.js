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
  [getGiftsSuccess]: (_, { payload }) => payload.data.ruGifts,
  [buyGiftsSuccess]: (_, { payload }) => payload,
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
