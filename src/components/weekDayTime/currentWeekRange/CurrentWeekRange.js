import React, { useState, useEffect } from "react";
import CurrentDay from "../currentDay/CurrentDay";
import ProgresiveBar from "../progresiveBar/ProgresiveBar";
import { CurrentWeekRangeStyled } from "./CurrentWeekRangeStyled";
import { useLocation } from "react-router";

const initialState = {
  search: "",
  width: window.innerWidth,
  breakPoint: 767,
};

const CurrentWeekRange = () => {
  const [state, setState] = useState(initialState);
  const location = useLocation();
  console.log(location);
  console.log(state);

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
    <CurrentWeekRangeStyled>
      <CurrentDay />
      {/* <CurrentDay day={} date={} /> */}
      <ProgresiveBar />
    </CurrentWeekRangeStyled>
  );
};

export default CurrentWeekRange;

//============================================

// 12. CurrentWeekRange(компонент, отрисовывающий
//   информацию о неделе): навигация по дням недели
