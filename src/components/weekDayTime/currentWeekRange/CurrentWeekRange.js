import React, { useState, useEffect } from "react";
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
      <div className="stats-wrapper">
        <div className="current-time">
          <p className="current-week">Неделя: 21-27 Декабря</p>
          <span className="current-tasks">Мoи задачи:</span>

          <span className="current-day">ПЯТНИЦА, 25-12-2020</span>
        </div>

        <div>
          <p className="stats">
            Заработано баллов за эту неделю:
            <span className="stats-number">0</span>
          </p>

          <p className="stats">
            Запланировано баллов на эту неделю:
            <span className="stats-number">0</span>
          </p>

          {/* <p> %% выполнения</p> */}
        </div>
      </div>
    </CurrentWeekRangeStyled>
  );
};

export default CurrentWeekRange;

//============================================

// 12. CurrentWeekRange(компонент, отрисовывающий
//   информацию о неделе): навигация по дням недели
