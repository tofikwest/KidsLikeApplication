import React from "react";
import * as moment from "moment";
import "moment/locale/ru";
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
  const end = endOfTheWeek && moment(endOfTheWeek).format("D MMMM");
  return (
    <CurrentWeekStyled colors={colors}>
      <p className="current-week">
        {t("Week")} {t(start)}-{t(end)}
      </p>
    </CurrentWeekStyled>
  );
};

export default CurrentWeek;
