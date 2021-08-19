import { createReducer } from "@reduxjs/toolkit";
import { loginUserSuccess } from "../auth/authActions";

const additionalInfoReducer = createReducer(
  {
    userBalance: 0,
    startWeekDate: "",
    endWeekDate: "",
    rewardsGained: 0,
    rewardsPlanned: 0,
  },
  {
    [loginUserSuccess]: (_, { payload }) => ({
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
