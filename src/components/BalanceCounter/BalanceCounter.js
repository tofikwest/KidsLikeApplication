import React from "react";
import { useSelector } from "react-redux";
import { userBalance } from "../../redux/additionalInfo/additionalInfoSelectors";
import { colors } from "../../general/styles/colors";
import BalanceCounterStyled from "./BalanceCounterStyled";

const BalanceCounter = () => {
  const currencyBalance = useSelector(userBalance);

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
