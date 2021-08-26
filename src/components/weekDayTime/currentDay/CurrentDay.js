import React, { useState, useEffect } from "react";
import moment from "moment";
import { useLocation } from "react-router";
import CurrentWeek from "../currentWeek/CurrentWeek";
import { CurrentDayStyled } from "./CurrentDayStyled";
import { colors } from "../../../general/styles/colors";
import { useSelector } from "react-redux";
import { getStartOfTheWeek } from "../../../redux/additionalInfo/additionalInfoSelectors";
import { useTranslation } from "react-i18next";

const initialState = {
  width: window.innerWidth,
  breakPoint: 767,
};

const CurrentDay = ({ selectedDate, isAnyTasksForChoosenDate }) => {
  const [state, setState] = useState(initialState);
  const location = useLocation();
  const { t } = useTranslation();

  const startOfTheWeek = useSelector(getStartOfTheWeek);

  const start = startOfTheWeek && moment(startOfTheWeek).format("DD");
  const monthYear = startOfTheWeek && moment(startOfTheWeek).format("MM-YYYY");

  const daysArray = [
    {
      day: "Monday",
      date: +start,
    },
    {
      day: "Tuesday",
      date: +start + 1,
    },
    {
      day: "Wednesday",
      date: +start + 2,
    },
    {
      day: "Thursday",
      date: +start + 3,
    },
    {
      day: "Friday",
      date: +start + 4,
    },
    {
      day: "Saturday",
      date: +start + 5,
    },
    {
      day: "Sunday",
      date: +start + 6,
    },
  ];

  const dateNumber = daysArray
    .filter(({ day }) => day === selectedDate)
    .map(({ date }) => `${","} ${date}`)
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

      <CurrentDayStyled
        colors={colors}
        isAnyTasksForChoosenDate={isAnyTasksForChoosenDate}
      >
        {state.width >= 1280 && <CurrentWeek />}
        {state.width >= 1280 && (
          <div>
            <span className="current-tasks">{t("My tasks")}</span>
            <span className="current-day">
              {t(selectedDate).toUpperCase()}
              {dateNumber && newDate}
            </span>
          </div>
        )}
        {state.width < 1280 && (
          <>
            <span className="current-tasks">{t("My tasks")}</span>
            {t(selectedDate).toUpperCase()}
            {dateNumber && newDate}
          </>
        )}
      </CurrentDayStyled>
    </>
  );
};

export default CurrentDay;
