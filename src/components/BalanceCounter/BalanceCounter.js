import React from "react";
import { useSelector } from "react-redux";
import { userBalance } from "../../redux/additionalInfo/additionalInfoSelectors";
import { colors } from "../../general/styles/colors";
import BalanceCounterStyled from "./BalanceCounterStyled";
import { useTranslation } from "react-i18next";

const BalanceCounter = () => {
  const currencyBalance = useSelector(userBalance);
  const { t } = useTranslation();

  return (
    <BalanceCounterStyled colors={colors}>
      <div className="balanceItemBox">
        <span className="balanceItems">{t("Points")}</span>
        <span className="balanceItems">{t("balance")}</span>
      </div>
      <span className="balanceCount">{currencyBalance}</span>
    </BalanceCounterStyled>
  );
};

export default BalanceCounter;
