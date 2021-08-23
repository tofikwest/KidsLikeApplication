import { HomePageStyled } from "./HomePageStyled";
import WeekTabs from "../../components/weekDayTime/weekTabs/WeekTabs";
import WeekTabContent from "../../components/weekDayTime/weekTabContent/WeekTabContent";
import { colors } from "../../general/styles/colors";
import Footer from "../../components/footer/Footer";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import CurrentDay from "../../components/weekDayTime/currentDay/CurrentDay";
import CurrentWeek from "../../components/weekDayTime/currentWeek/CurrentWeek";

const initialState = {
  search: "",
  width: window.innerWidth,
  breakPoint: 1280,
};

const HomePage = () => {
  const [state, setState] = useState(initialState);
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [location]);

  const handleResizeWindow = () => {
    setState((prev) => ({ ...prev, width: window.innerWidth }));
  };

  const choosenDate = (date) => {
    setState((prevState) => ({ ...prevState, search: date }));
  };

  return (
    <HomePageStyled colors={colors}>
      {state.width < state.breakPoint && state.width >= 768 && (
        <div className="upside-bar">
          <CurrentWeek />
          <WeekTabs choosenDate={choosenDate} />
        </div>
      )}

      {state.width >= state.breakPoint && (
        <div className="home-sidebar">
          <WeekTabs choosenDate={choosenDate} />
        </div>
      )}

      {state.width < 767 && (
        <>
          <WeekTabs choosenDate={choosenDate} />
          <>
            <CurrentDay selectedDate={state.search} />
          </>
        </>
      )}

      <div className="right-side">
        <WeekTabContent selectedDate={state.search} />

        <Footer />
      </div>
    </HomePageStyled>
  );
};

export default HomePage;

//======================================
// Контейнерный компонент.
// Дочерние компоненты: WeekTabs, WeekTabContent
// Помимо базовой разметки, необходимой для размещения элементов
// на странице, напрямую работает с store.
// Передает дочерним компонентам пропы для их отрисовки.
// Осуществляет запросы на сервер.Записывает полученные данные в store.
//   !!!Отвечает за передачу необходимых пропов в дочерние компоненты."
