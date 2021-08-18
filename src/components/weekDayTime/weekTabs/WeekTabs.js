import React, { useState, useEffect } from "react";
import { WeekTabsStyled } from "./WeekTabsStyled";
import { useLocation } from "react-router";

const initialState = {
  search: "",
  width: window.innerWidth,
  breakPoint: 1280,
};

const WeekTabs = () => {
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

  const handleClick = (e) => {
    setState((prev) => ({ ...prev, search: e.target.value }));

    const activeBtn = document.querySelector(`button[value=${e.target.value}]`);

    if (e.currentTarget === e.target) {
      activeBtn.setAttribute("class", "weekDays-listItem weekDays-active");
    }
    console.log(activeBtn);
    //==================================================
    //нужно снять активный класс с неактивной кнопки
    if (e.currentTarget !== e.target) {
      activeBtn.setAttribute("class", "weekDays-listItem");
    }
    //==================================================
    //тут лежит день недели на английском
    //нужен axios & render
  };

  // const reset = () => {
  //   setState({ ...initialState });
  // };

  return (
    <>
      <WeekTabsStyled>
        <button
          type="button"
          value="tuesday"
          onClick={handleClick}
          className="weekDays-listItem"
        >
          {state.width > state.breakPoint ? "Понедельник" : "ПН"}
        </button>

        <button
          type="button"
          value="tuesday"
          onClick={handleClick}
          className="weekDays-listItem"
        >
          {state.width > state.breakPoint ? "Вторник" : "ВТ"}
        </button>
        <button
          type="button"
          value="wednesday"
          onClick={handleClick}
          className="weekDays-listItem"
        >
          {state.width > state.breakPoint ? "Среда" : "СР"}
        </button>
        <button
          type="button"
          value="thursday"
          onClick={handleClick}
          className="weekDays-listItem"
        >
          {state.width > state.breakPoint ? "Четверг" : "ЧТ"}
        </button>
        <button
          type="button"
          value="friday"
          onClick={handleClick}
          className="weekDays-listItem weekDays-active"
        >
          {state.width > state.breakPoint ? "Пятница" : "ПТ"}
        </button>
        <button
          type="button"
          value="saturday"
          onClick={handleClick}
          className="weekDays-listItem"
        >
          {state.width > state.breakPoint ? "Суббота" : "СБ"}
        </button>
        <button
          type="button"
          value="sunday"
          onClick={handleClick}
          className="weekDays-listItem"
        >
          {state.width > state.breakPoint ? "Воскресенье" : "ВС"}
        </button>
      </WeekTabsStyled>
    </>
  );
};

export default WeekTabs;

//================================================

// 11. WeekTabs(переключатель дней недели на главной
//странице): Осуществляет работу с query - параметрами.
//В соответствии с выбранным элементом добавляет к роуту
//необходимый query - параметр search.
// (Например: https://kidslike.goit.ua/?day=monday)
//В зависимости от выбранного роута(с соответствующими
//query - параметрами) возвращает полученные значения в mainPage.";
