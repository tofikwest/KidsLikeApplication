import React from "react";
import { CurrentWeekRangeStyled } from "./CurrentWeekRangeStyled";

const CurrentWeekRange = () => {
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
