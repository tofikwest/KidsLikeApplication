import React, { useState } from "react";
import { WeekTabsStyled } from "./WeekTabsStyled";

const initialState = {
  search: "",
};

const WeekTabs = () => {
  const [state, setState] = useState();
  console.log(initialState);
  console.log(state);

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
    <WeekTabsStyled>
      <ul className="weekDays-list">
        <button
          type="button"
          value="monday"
          onClick={handleClick}
          className="weekDays-listItem"
        >
          Понедельник
        </button>
        <button
          type="button"
          value="tuesday"
          onClick={handleClick}
          className="weekDays-listItem"
        >
          Вторник
        </button>
        <button
          type="button"
          value="wednesday"
          onClick={handleClick}
          className="weekDays-listItem"
        >
          Среда
        </button>
        <button
          type="button"
          value="thursday"
          onClick={handleClick}
          className="weekDays-listItem"
        >
          Четверг
        </button>
        <button
          type="button"
          value="friday"
          onClick={handleClick}
          className="weekDays-listItem weekDays-active"
        >
          Пятница
        </button>
        <button
          type="button"
          value="saturday"
          onClick={handleClick}
          className="weekDays-listItem"
        >
          Суббота
        </button>
        <button
          type="button"
          value="sunday"
          onClick={handleClick}
          className="weekDays-listItem"
        >
          Воскресенье
        </button>
      </ul>
    </WeekTabsStyled>
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
