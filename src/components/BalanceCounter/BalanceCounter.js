import React from "react";
import { colors } from "../../general/styles/colors";
import BalanceCounterStyled from "./BalanceCounterStyled";

const BalanceCounter = () => {
  return (
    <BalanceCounterStyled colors={colors}>
      <span className="balanceItems">Баланс</span>
      <span className="balanceItems">баллов:</span>
    </BalanceCounterStyled>
  );
};

export default BalanceCounter;
