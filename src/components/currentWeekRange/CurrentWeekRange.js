import React from "react";
import CurrentDay from "../currentDay/CurrentDay";
import ProgresiveBar from "../progresiveBar/ProgresiveBar";
import { CurrentWeekRangeStyled } from "./CurrentWeekRangeStyled";

const CurrentWeekRange = () => {
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
