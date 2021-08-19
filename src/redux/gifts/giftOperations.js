import { buyGiftIds, getAllGifts } from "../../services/gift_api";
import {
  getGiftsRequest,
  getGiftsError,
  getGiftsSuccess,
  buyGiftsError,
  buyGiftsSuccess,
  buyGiftsRequest,
} from "./giftsAction";

export const getGiftsOperation = () => async (dispatch, getState) => {
  try {
    dispatch(getGiftsRequest());
    const res = await getAllGifts();
    dispatch(getGiftsSuccess(res));
  } catch (error) {
    dispatch(getGiftsError(error.message));
  }
};

export const buyGiftOperation = (giftIds) => async (dispatch, getState) => {
  try {
    dispatch(buyGiftsRequest());
    const res = await buyGiftIds(giftIds);
    dispatch(buyGiftsSuccess(res));
  } catch (error) {
    dispatch(buyGiftsError(error.message));
  }
};
