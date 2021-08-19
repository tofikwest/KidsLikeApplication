import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import planer from "../../../images/planer.png";
import CurrentDay from "../currentDay/CurrentDay";
import ProgresiveBar from "../../progresiveBar/ProgresiveBar";
import { WeekTabContentStyled } from "./WeekTabContentStyled";
// import CardList from "../../components/cardList/CardList";
import CurrentWeekRange from "../currentWeekRange/CurrentWeekRange";

const initialState = {
  search: "",
  width: window.innerWidth,
  breakPoint: 767,
};

const WeekTabContent = ({ currentTasks }) => {
  const [state, setState] = useState(initialState);
  const location = useLocation();
  // console.log(location);
  // console.log(state);

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
    <WeekTabContentStyled>
      {state.width < state.breakPoint ||
        (state.width >= 1280 && <CurrentDay />)}
      {/* <CurrentDay day={} date={} /> */}
      {state.width > state.breakPoint && <ProgresiveBar />}
      {state.width > state.breakPoint && state.width < 1280 && <CurrentDay />}

      <CurrentWeekRange />

      {!currentTasks ? (
        <>
          <p className="notification">На этот день задач нет</p>
          <button type="button" className="home-button">
            Запланировать задачи
          </button>
          <img src={planer} alt="children" className="children-img" />
        </>
      ) : (
        <p>CardList</p>
        // <CardList />
      )}
    </WeekTabContentStyled>
  );
};

export default WeekTabContent;

//====================================

// 13. WeekTabContent(обертка списка текущих задач):
// Принимает в пропах информацию о текущих задачах.
// Получает соответствующие методы.
