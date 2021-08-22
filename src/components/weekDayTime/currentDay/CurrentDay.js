import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import CurrentWeek from "../currentWeek/CurrentWeek";
import { CurrentDayStyled } from "./CurrentDayStyled";

const initialState = {
  width: window.innerWidth,
  breakPoint: 767,
};

const CurrentDay = ({ day, date }) => {
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
  return (
    <>
      {state.width < state.breakPoint && <CurrentWeek />}

      <CurrentDayStyled>
        {state.width >= 1280 && <CurrentWeek />}
        {state.width >= 1280 && (
          <div>
            <span className="current-tasks">Мoи задачи:</span>
            <span className="current-day">
              СРЕДА, 18-08-2021
              {/* {`${day}`}, {`${date}`} */}
            </span>
          </div>
        )}
        {state.width < 1280 && (
          <>
            <span className="current-tasks">Мoи задачи:</span>
            <span className="current-day">
              СРЕДА, 18-08-2021
              {/* {`${day}`}, {`${date}`} */}
            </span>
          </>
        )}
      </CurrentDayStyled>
    </>
  );
};

export default CurrentDay;
