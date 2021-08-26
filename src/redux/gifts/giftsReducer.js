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
  toggleAwardSuccess,
  toggleAwardsReset,
} from "./giftsAction";

const itemsReducer = createReducer([], {
  [toggleAwardSuccess]: (state, { payload }) =>
    state.map((award) =>
      award.id === payload ? { ...award, isSelected: !award.isSelected } : award
    ),

  [toggleAwardsReset]: (state, { payload }) =>
    state.map((award) =>
      award.isSelected ? { ...award, isSelected: !award.isSelected } : award
    ),

  [getGiftsSuccess]: (_, { payload }) => payload.ruGifts,
  [signOutSuccess]: () => [],
});

const selectGiftsId = createReducer([], {
  [buyGiftsSuccess]: (_, { payload }) => payload.purchasedGiftIds,
  [signOutSuccess]: () => [],
  // [toggleAwardsReset]: () => [],
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
  giftsId: selectGiftsId,
  isLoading: isLoadingReducer,
  error: errorReducer,
});

export default giftsReducer;
