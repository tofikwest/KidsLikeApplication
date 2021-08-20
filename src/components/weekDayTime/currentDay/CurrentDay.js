import React from "react";
import CurrentWeek from "../currentWeek/CurrentWeek";
import { CurrentDayStyled } from "./CurrentDayStyled";

const CurrentDay = ({ day, date }) => {
  return (
    <CurrentDayStyled>
      <CurrentWeek />
      <span className="current-tasks">Мoи задачи:</span>
      <span className="current-day">
        СРЕДА, 18-08-2021
        {/* {`${day}`}, {`${date}`} */}
      </span>
    </CurrentDayStyled>
  );
};

export default CurrentDay;
