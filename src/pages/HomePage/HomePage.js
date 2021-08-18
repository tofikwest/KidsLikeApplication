import { HomePageStyled } from "./HomePageStyled";
import WeekTabs from "../../components/weekDayTime/weekTabs/WeekTabs";
import WeekTabContent from "../../components/weekDayTime/weekTabContent/WeekTabContent";
import CurrentWeekRange from "../../components/weekDayTime/currentWeekRange/CurrentWeekRange";
import Footer from "../../components/footer/Footer";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";

const initialState = {
  width: window.innerWidth,
  breakPoint: 1280,
};

const HomePage = () => {
  const [state, setState] = useState(initialState);
  const location = useLocation();
  console.log(location);

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
    <HomePageStyled>
      {state.width < state.breakPoint && state.width > 768 && (
        <div className="upside-bar">
          <p className="upside-bar--current-week">Неделя: 21-27 Декабря</p>
          <WeekTabs />
        </div>
      )}

      {state.width > state.breakPoint && (
        <div className="home-sidebar">
          <WeekTabs />
        </div>
      )}

      {state.width < 767 && <WeekTabs />}

      <div className="right-side">
        <CurrentWeekRange />
        <WeekTabContent />
        <Footer />
        {/* пока футер только для десктопа, подожду адаптивку от Тани  :) */}
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
