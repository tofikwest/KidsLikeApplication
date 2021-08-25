import React, { useState, useEffect } from "react";
import moment from "moment";
import { useLocation } from "react-router";
import CurrentWeek from "../currentWeek/CurrentWeek";
import { CurrentDayStyled } from "./CurrentDayStyled";
import { colors } from "../../../general/styles/colors";
import { useSelector } from "react-redux";
import { getStartOfTheWeek } from "../../../redux/additionalInfo/additionalInfoSelectors";

const initialState = {
  width: window.innerWidth,
  breakPoint: 767,
};

const CurrentDay = ({ selectedDate }) => {
  const [state, setState] = useState(initialState);
  const location = useLocation();

  const startOfTheWeek = useSelector(getStartOfTheWeek);

  const start = startOfTheWeek && moment(startOfTheWeek).format("DD");
  const monthYear = startOfTheWeek && moment(startOfTheWeek).format("MM-YYYY");

  const daysArray = [
    {
      day: "Monday",
      date: +start,
      russianDay: "Понедельник",
    },
    {
      day: "Tuesday",
      date: +start + 1,
      russianDay: "Вторник",
    },
    {
      day: "Wednesday",
      date: +start + 2,
      russianDay: "Среда",
    },
    {
      day: "Thursday",
      date: +start + 3,
      russianDay: "Четверг",
    },
    {
      day: "Friday",
      date: +start + 4,
      russianDay: "Пятница",
    },
    {
      day: "Saturday",
      date: +start + 5,
      russianDay: "Суббота",
    },
    {
      day: "Sunday",
      date: +start + 6,
      russianDay: "Воскресенье",
    },
  ];

  const dateNumber = daysArray
    .filter(({ day }) => day === selectedDate)
    .map(({ russianDay, date }) => `${russianDay}, ${date}`)
    .join("");

  const newDate = `${dateNumber}-${monthYear}`;

  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [location]);

  const handleResizeWindow = () => {
    setState((prev) => ({ ...prev, width: window.innerWidth }));
  };

  return (
    <>
      {state.width < state.breakPoint && <CurrentWeek />}

      <CurrentDayStyled colors={colors}>
        {state.width >= 1280 && <CurrentWeek />}
        {state.width >= 1280 && (
          <div>
            <span className="current-tasks">Мoи задачи:</span>
            <span className="current-day"></span>
            {dateNumber && newDate}
          </div>
        )}
        {state.width < 1280 && (
          <>
            <span className="current-tasks">Мoи задачи:</span>
            <span className="current-day">{dateNumber && newDate}</span>
          </>
        )}
      </CurrentDayStyled>
    </>
  );
};

export default CurrentDay;
