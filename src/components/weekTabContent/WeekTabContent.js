import React from "react";
import planer from "../../images/planer.png";
import { WeekTabContentStyled } from "./WeekTabContentStyled";

const WeekTabContent = ({ currentTasks }) => {
  return (
    <WeekTabContentStyled>
      {!currentTasks ? (
        <>
          <p className="notification">На этот день задач нет</p>
          <button type="button" className="home-button">
            Запланировать задачи
          </button>
          <img src={planer} alt="children" />
        </>
      ) : (
        <p>CardList</p>
        // (<CardList />)
      )}
    </WeekTabContentStyled>
  );
};

export default WeekTabContent;

//====================================

// 13. WeekTabContent(обертка списка текущих задач):
// Принимает в пропах информацию о текущих задачах.
// Получает соответствующие методы.
