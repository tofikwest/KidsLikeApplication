import { createReducer } from "@reduxjs/toolkit";
import {
  getCurrentUserSuccess,
  loginUserSuccess,
  registerUserSuccess,
  signOutSuccess,
} from "../auth/authActions";
import { buyGiftsSuccess } from "../gifts/giftsAction";
import { setDaysTaskSuccess, toggleTaskSuccess } from "../tasks/tasksAction";

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
    [buyGiftsSuccess]: (state, { payload }) => ({
      ...state,
      userBalance: payload.updatedBalance,
    }),
    [toggleTaskSuccess]: (state, { payload }) => ({
      ...state,
      userBalance: payload.updatedBalance,
      rewardsGained: payload.updatedWeekGainedRewards,
    }),
    [setDaysTaskSuccess]: (state, { payload }) => ({
      ...state,
      rewardsPlanned: payload.updatedWeekPlannedRewards,
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
