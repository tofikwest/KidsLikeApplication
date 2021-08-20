import { createReducer } from "@reduxjs/toolkit";
import {
  getCurrentUserSuccess,
  loginUserSuccess,
  registerUserSuccess,
  signOutSuccess,
} from "../auth/authActions";
import { buyGiftsSuccess } from "../gifts/giftsAction";

const additionalInfoReducer = createReducer(
  {
    userBalance: 0,
    startWeekDate: "",
    endWeekDate: "",
    rewardsGained: 0,
    rewardsPlanned: 0,
  },
  {
    [registerUserSuccess]: (_, { payload }) => ({
      userBalance: payload.user.balance,
      startWeekDate: payload.week.startWeekDate,
      endWeekDate: payload.week.endWeekDate,
      rewardsGained: payload.week.rewardsGained,
      rewardsPlanned: payload.week.rewardsPlanned,
    }),
    [loginUserSuccess]: (_, { payload }) => ({
      userBalance: payload.user.balance,
      startWeekDate: payload.week.startWeekDate,
      endWeekDate: payload.week.endWeekDate,
      rewardsGained: payload.week.rewardsGained,
      rewardsPlanned: payload.week.rewardsPlanned,
    }),
    [getCurrentUserSuccess]: (_, { payload }) => ({
      userBalance: payload.user.balance,
      startWeekDate: payload.week.startWeekDate,
      endWeekDate: payload.week.endWeekDate,
      rewardsGained: payload.week.rewardsGained,
      rewardsPlanned: payload.week.rewardsPlanned,
    }),
    [buyGiftsSuccess]: (_, { payload }) => ({
      userBalance: payload.updatedBalance,
    }),
    [signOutSuccess]: () => ({
      userBalance: 0,
      startWeekDate: "",
      endWeekDate: "",
      rewardsGained: 0,
      rewardsPlanned: 0,
    }),
  }
);

export default additionalInfoReducer;
