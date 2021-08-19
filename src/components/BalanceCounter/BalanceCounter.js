import React from "react";
import { colors } from "../../general/styles/colors";
import BalanceCounterStyled from "./BalanceCounterStyled";

const BalanceCounter = () => {
  return (
    <BalanceCounterStyled colors={colors}>
      <div className="balanceItemBox">
        <span className="balanceItems">Баланс</span>
        <span className="balanceItems">баллов:</span>
      </div>
      <span className="balanceCount">0</span>
    </BalanceCounterStyled>
  );
};

export default BalanceCounter;
