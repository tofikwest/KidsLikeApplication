import React from "react";
import AwardsErrorStyled from "./AwardsErrorStyled";
import { colors } from "../../../general/styles/colors";
import { useTranslation } from "react-i18next";

const AwardsError = ({ error }) => {
  const { t } = useTranslation();

  return (
    <AwardsErrorStyled colors={colors}>
      {error === "Request failed with status code 400" && (
        <span className="errorAwards">{t("Select Present")} </span>
      )}
      {error === "Request failed with status code 409" && (
        <span className="errorAwards">{t("Lack of points")}</span>
      )}
    </AwardsErrorStyled>
  );
};

export default AwardsError;
