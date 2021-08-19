import React from "react";
import * as moment from "moment";
import { CurrentDayStyled } from "./CurrentDayStyled";

const CurrentDay = ({ day, date }) => {
  const startOfTheWeek = moment().startOf("week").format("DD");
  const endOfTheWeek = moment().endOf("week").format("DD");

  function getCurrentMonth() {
    const months = [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ];

    return months[moment().get("M")];
  }
  const month = getCurrentMonth(moment().get("M"));
  return (
    <CurrentDayStyled>
      <p className="current-week">
        Неделя: {Number(startOfTheWeek)}-{Number(endOfTheWeek)} {month}
      </p>
      <span className="current-tasks">Мoи задачи:</span>
      <span className="current-day">
        СРЕДА, 18-08-2021
        {/* {`${day}`}, {`${date}`} */}
      </span>
    </CurrentDayStyled>
  );
};

export default CurrentDay;
