import React, { useState, useEffect } from "react";
import moment from "moment";

import { useLocation } from "react-router";
import CurrentWeek from "../currentWeek/CurrentWeek";
import { CurrentDayStyled } from "./CurrentDayStyled";
import { colors } from "../../../general/styles/colors";

const initialState = {
  width: window.innerWidth,
  breakPoint: 767,
};

let date = null;
let day = null;

const CurrentDay = () => {
  const [state, setState] = useState(initialState);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [location]);

  const handleResizeWindow = () => {
    setState((prev) => ({ ...prev, width: window.innerWidth }));
  };

  date = moment().format("DD-MM-YYYY");
  day = moment().format("dddd");
  let newDay = day[0].toUpperCase() + day.slice(1);

  return (
    <>
      {state.width < state.breakPoint && <CurrentWeek />}

      <CurrentDayStyled colors={colors}>
        {state.width >= 1280 && <CurrentWeek />}
        {state.width >= 1280 && (
          <div>
            <span className="current-tasks">Мoи задачи:</span>
            <span className="current-day">
              {/* СРЕДА, 18-08-2021 */}
              {`${newDay}`}, {`${date}`}
            </span>
          </div>
        )}
        {state.width < 1280 && (
          <>
            <span className="current-tasks">Мoи задачи:</span>
            <span className="current-day">
              {/* СРЕДА, 18-08-2021 */}
              {`${newDay}`}, {`${date}`}
            </span>
          </>
        )}
      </CurrentDayStyled>
    </>
  );
};

export default CurrentDay;
