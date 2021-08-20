import React from "react";
import * as moment from "moment";
import "moment/locale/ru";
import {
  getEndOfTheWeek,
  getStartOfTheWeek,
} from "../../../redux/additionalInfo/additionalInfoSelectors";
import { CurrentWeekStyled } from "./CurrentWeekStyled";
import { useSelector } from "react-redux";

const CurrentWeek = () => {
  const startOfTheWeek = useSelector(getStartOfTheWeek);
  const endOfTheWeek = useSelector(getEndOfTheWeek);

  const start = startOfTheWeek && moment(startOfTheWeek).format("DD");
  const end = endOfTheWeek && moment(endOfTheWeek).format("D MMMM");

  return (
    <CurrentWeekStyled>
      <p className="current-week">
        Неделя: {start}-{end}
      </p>
    </CurrentWeekStyled>
  );
};

export default CurrentWeek;
