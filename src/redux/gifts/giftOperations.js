import { buyGiftIds, getAllGifts } from "../../services/gift_api";
import {
  getGiftsRequest,
  getGiftsError,
  getGiftsSuccess,
  buyGiftsError,
  buyGiftsSuccess,
  buyGiftsRequest,
  toggleAwardsReset,
} from "./giftsAction";

export const getGiftsOperation = () => async (dispatch, getState) => {
  try {
    dispatch(getGiftsRequest());
    const res = await getAllGifts();
    dispatch(getGiftsSuccess(res.data));
  } catch (error) {
    dispatch(getGiftsError(error.message));
  }
};

export const buyGiftOperation =
  (giftIds, openAwardsModal) => async (dispatch, getState) => {
    try {
      dispatch(buyGiftsRequest());
      await buyGiftIds(giftIds).then((res) =>
        dispatch(buyGiftsSuccess(res.data))
      );
      openAwardsModal();
    } catch (error) {
      dispatch(buyGiftsError(error.message));
      dispatch(toggleAwardsReset());
    }
  };
