import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import planer from "../../../images/planer.png";
import CurrentDay from "../currentDay/CurrentDay";
import ProgressBar from "../../progressBar/ProgressBar";
import { WeekTabContentStyled } from "./WeekTabContentStyled";
import CardList from "../../cardList/CardList";
import { authorizedUser } from "../../../redux/auth/authSelectors";
import { useSelector } from "react-redux";
import { getTasks } from "../../../redux/tasks/tasksSelector";
import { colors } from "../../../general/styles/colors";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const initialState = {
  width: window.innerWidth,
  breakPoint: 767,
};

const WeekTabContent = ({ selectedDate, choosenDateTab }) => {
  const isAuthorized = useSelector(authorizedUser);
  const [state, setState] = useState(initialState);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [location]);

  const handleResizeWindow = () => {
    setState((prev) => ({ ...prev, width: window.innerWidth }));
  };

  const tasks = useSelector(getTasks);

  const getCurrentDateId = () => {
    const date = new Date();
    const weekday = date.getDay();
    if (weekday === 0) return 6;
    else return weekday - 1;
  };

  const getCurrentDateName = (day) => {
    const date = new Date(day);
    let options = { weekday: "long" };
    const weekday = new Intl.DateTimeFormat("en-US", options).format(date);

    return weekday;
  };

  const getSelectedDateIdByName = (dateName) => {
    if (!tasks.length) return;
    for (let i = 0; i < 7; i++) {
      const checkDay = tasks[0].days[i].date;
      if (getCurrentDateName(checkDay) === dateName) {
        return i;
      }
    }
  };

  const isAnyTasksForChoosenDate = () => {
    const currentDayId = getSelectedDateIdByName(choosenDateTab);
    const currentDayTasks = tasks.filter(
      (task) => task?.days[currentDayId]?.isActive
    );
    const isCurrentDayHaveTasks = Boolean(currentDayTasks.length);
    return isCurrentDayHaveTasks;
  };

  return (
    <WeekTabContentStyled colors={colors}>
      {state.width < state.breakPoint ||
        (state.width >= 1280 && (
          <div className="desktop-dayWeek-wrapper">
            <CurrentDay selectedDate={selectedDate} /> <ProgressBar />
          </div>
        ))}

      {state.width > state.breakPoint && state.width < 1280 && (
        <>
          <ProgressBar />
          <CurrentDay selectedDate={selectedDate} />
        </>
      )}

      {isAuthorized && !isAnyTasksForChoosenDate() && (
        <>
          <p className="notification">{t("No tasks for that day")}</p>
          <Link to="/planning" type="button" className="home-button">
            {t("Plan tasks")}
          </Link>
          <img src={planer} alt="children" className="children-img" />
        </>
      )}

      {isAuthorized && isAnyTasksForChoosenDate() && (
        <div className="cards-wrapper">
          <CardList
            selectedDate={getSelectedDateIdByName(selectedDate)}
            tasks={tasks}
            currentDateId={getCurrentDateId()}
          />
        </div>
      )}
    </WeekTabContentStyled>
  );
};

export default WeekTabContent;
