import React from "react";
import * as moment from "moment";
import {
  getEndOfTheWeek,
  getStartOfTheWeek,
} from "../../../redux/additionalInfo/additionalInfoSelectors";
import { CurrentWeekStyled } from "./CurrentWeekStyled";
import { useSelector } from "react-redux";
import { colors } from "../../../general/styles/colors";
import { useTranslation } from "react-i18next";

const CurrentWeek = () => {
  const { t } = useTranslation();

  const startOfTheWeek = useSelector(getStartOfTheWeek);
  const endOfTheWeek = useSelector(getEndOfTheWeek);
  const start = startOfTheWeek && moment(startOfTheWeek).format("DD");
  const end = endOfTheWeek && moment(endOfTheWeek).format("DD");

  function getThisMonth() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return months[moment().get("M")];
  }
  const month = getThisMonth(moment().get("M"));
  return (
    <CurrentWeekStyled colors={colors}>
      <p className="current-week">
        {t("Week")} {start}-{end} {t(month)}
      </p>
    </CurrentWeekStyled>
  );
};

export default CurrentWeek;
