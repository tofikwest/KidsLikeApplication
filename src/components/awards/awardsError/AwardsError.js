import React from "react";
import AwardsErrorStyled from "./AwardsErrorStyled";
import { colors } from "../../../general/styles/colors";

const AwardsError = ({ error }) => {
  return (
    <AwardsErrorStyled colors={colors}>
      {error === "Request failed with status code 400" && (
        <span className="errorAwards">Выберите подарок </span>
      )}
      {error === "Request failed with status code 409" && (
        <span className="errorAwards">Не хватает быллов </span>
      )}
    </AwardsErrorStyled>
  );
};

export default AwardsError;
