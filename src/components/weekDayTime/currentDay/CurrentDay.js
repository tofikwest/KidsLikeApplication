import moment from "moment";
import React from "react";
import CurrentWeek from "../currentWeek/CurrentWeek";
import { CurrentDayStyled } from "./CurrentDayStyled";

let date = null;
let day = null;

const CurrentDay = () => {
  date = moment().format("DD-MM-YYYY");
  day = moment().format("dddd");
  let newDay = day[0].toUpperCase() + day.slice(1);
  return (
    <CurrentDayStyled>
      <CurrentWeek />
      <span className="current-tasks">Мoи задачи:</span>
      <span className="current-day">
        {`${newDay}`}, {`${date}`}
      </span>
    </CurrentDayStyled>
  );
};

export default CurrentDay;
