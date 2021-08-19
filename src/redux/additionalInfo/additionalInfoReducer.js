import { createReducer } from "@reduxjs/toolkit";
import {
  getCurrentUserSuccess,
  loginUserSuccess,
  registerUserSuccess,
} from "../auth/authActions";

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
    // [signOutUser]: () => ({
    //   email: "",
    //   displayName: "",
    //   localId: "",
    // }),
  }
);

export default additionalInfoReducer;
