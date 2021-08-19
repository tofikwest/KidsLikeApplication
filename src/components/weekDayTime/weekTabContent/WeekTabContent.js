import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import planer from "../../../images/planer.png";
import CurrentDay from "../currentDay/CurrentDay";
import ProgresiveBar from "../../progresiveBar/ProgresiveBar";
import { WeekTabContentStyled } from "./WeekTabContentStyled";
import CardList from "../../cardList/CardList";
import CurrentWeekRange from "../currentWeekRange/CurrentWeekRange";
import { authorizedUser } from "../../../redux/auth/authSelectors";
import TaskStatusIcon from "../../taskStatusIcon/TaskStatusIcon";
import TaskToggle from "../../taskToggle/TaskToggle";
import axios from "axios";

const initialState = {
  search: "",
  width: window.innerWidth,
  breakPoint: 767,
};

const WeekTabContent = ({ currentTasks }) => {
  const [state, setState] = useState(initialState);
  const location = useLocation();

  const date = "2021-08-19"; // Эту переменную передаю в пропы (имитация нажатия на день недели). Дальше дата проверяется на сегодняшнюю и если совпадает то таски можно закрывать, иначе учидеть закрыты ли они были за прошлые дни.
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

  // Пока тут ибо где еще хз

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = async () => {
    const res = await axios
      .get("/user/info")
      .then((res) => res.data.week.tasks);

    setTasks(res);
  };

  const getCurrentDate = () => {
    const todayDate = new Date();
    const fullYear = todayDate.getFullYear();
    let month = (todayDate.getMonth() + 1).toString();
    let day = todayDate.getDate();

    const dateString =
      fullYear +
      "-" +
      (month > 1 && month < 10 ? 0 + month : month) +
      "-" +
      day;
    return dateString;
  };

  return (
    <WeekTabContentStyled>
      {state.width < state.breakPoint ||
        (state.width >= 1280 && <CurrentDay />)}
      {/* <CurrentDay day={} date={} /> */}
      {state.width > state.breakPoint && <ProgresiveBar />}
      {state.width > state.breakPoint && state.width < 1280 && <CurrentDay />}

      <CurrentWeekRange />

      {!authorizedUser ? (
        <>
          <p className="notification">На этот день задач нет</p>
          <button type="button" className="home-button">
            Запланировать задачи
          </button>
          <img src={planer} alt="children" className="children-img" />
        </>
      ) : (
        <div className="cards-wrapper">
          <CardList date={date} tasks={tasks}>
            {date === getCurrentDate() ? (
              <TaskToggle state={tasks} />
            ) : (
              <TaskStatusIcon />
            )}
          </CardList>
        </div>
      )}
    </WeekTabContentStyled>
  );
};

export default WeekTabContent;

//====================================

// 13. WeekTabContent(обертка списка текущих задач):
// Принимает в пропах информацию о текущих задачах.
// Получает соответствующие методы.
