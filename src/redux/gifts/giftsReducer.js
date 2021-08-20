import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { signOutSuccess } from "../auth/authActions";
import {
  buyGiftsError,
  buyGiftsRequest,
  buyGiftsSuccess,
  getGiftsRequest,
  getGiftsError,
  getGiftsSuccess,
} from "./giftsAction";

const itemsReducer = createReducer([], {
  [getGiftsSuccess]: (_, { payload }) => payload,
  [buyGiftsSuccess]: (state, { payload }) =>
    state.map((gift) =>
      payload.purchasedGiftIds.includes(gift.id)
        ? { ...gift, isSelected: !gift.isSelected }
        : gift
    ),
  // (_, { payload }) => payload,
  [signOutSuccess]: () => [],
});

const isLoadingReducer = createReducer(false, {
  [getGiftsRequest]: () => true,
  [getGiftsSuccess]: () => false,
  [getGiftsError]: () => false,
  [buyGiftsRequest]: () => true,
  [buyGiftsSuccess]: () => false,
  [buyGiftsError]: () => false,
  [signOutSuccess]: () => false,
});

const errorReducer = createReducer("", {
  [getGiftsRequest]: () => "",
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
