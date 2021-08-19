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
      userBalance: payload.data.user.balance,
      startWeekDate: payload.data.week.startWeekDate,
      endWeekDate: payload.data.week.endWeekDate,
      rewardsGained: payload.data.week.rewardsGained,
      rewardsPlanned: payload.data.week.rewardsPlanned,
    }),
    // [signOutUser]: () => ({
    //   email: "",
    //   displayName: "",
    //   localId: "",
    // }),
  }
);

export default additionalInfoReducer;
