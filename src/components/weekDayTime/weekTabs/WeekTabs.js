import React, { useState, useEffect } from "react";
import { WeekTabsStyled } from "./WeekTabsStyled";
import { useLocation } from "react-router";
import { WeekTabsData } from "./WeekTabsData";
import { colors } from "../../../general/styles/colors";
import { useTranslation } from "react-i18next";

const initialState = {
  width: window.innerWidth,
  breakPoint: 1280,
};

const WeekTabs = ({ choosenDate, selectedDate }) => {
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

  const handleClick = (e) => {
    const activeBtn = document.querySelector(
      `button[value=${e.currentTarget.value}]`
    );
    const prevActiveBtn = document.querySelector(
      `button[class="weekDays-listItem weekDays-active"]`
    );

    if (e.currentTarget === activeBtn) {
      prevActiveBtn?.setAttribute("class", "weekDays-listItem");
      activeBtn.setAttribute("class", "weekDays-listItem weekDays-active");
      choosenDate(activeBtn.value);
    }
  };

  return (
    <>
      <WeekTabsStyled colors={colors}>
        {WeekTabsData.map(({ dayFull, dayShort, search, className }) => (
          <button
            key={dayShort}
            type="button"
            value={search}
            onClick={handleClick}
            className={
              search === selectedDate
                ? "weekDays-listItem weekDays-active"
                : "weekDays-listItem"
            }
          >
            {state.width >= state.breakPoint ? (
              <span>{t(dayFull)}</span>
            ) : (
              <span>{t(dayShort)}</span>
            )}
          </button>
        ))}
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
