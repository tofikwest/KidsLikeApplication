import React from "react";
import { useSelector } from "react-redux";
import { colors } from "../../general/styles/colors";
import BalanceCounterStyled from "./BalanceCounterStyled";

const BalanceCounter = () => {
  const currencyBalance = useSelector(
    (state) => state.additionalInfo.userBalance
  );

  return (
    <BalanceCounterStyled colors={colors}>
      <div className="balanceItemBox">
        <span className="balanceItems">Баланс</span>
        <span className="balanceItems">баллов:</span>
      </div>
      <span className="balanceCount">{currencyBalance}</span>
    </BalanceCounterStyled>
  );
};

export default BalanceCounter;
