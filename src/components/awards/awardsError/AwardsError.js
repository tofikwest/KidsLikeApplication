import React from "react";
import AwardsErrorStyled from "./AwardsErrorStyled";
import { colors } from "../../../general/styles/colors";

const AwardsError = ({ error }) => {
  return (
    <AwardsErrorStyled colors={colors}>
      {error === "Request failed with status code 400" && (
        <p className="errorAwards">Выберите подарок </p>
      )}
      {error === "Request failed with status code 409" && (
        <p className="errorAwards">Не хватает баллов </p>
      )}
    </AwardsErrorStyled>
  );
};

export default AwardsError;
