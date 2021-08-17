// Контейнерный компонент.
// Дочерние компоненты: WeekTabs, WeekTabContent
// Помимо базовой разметки, необходимой для размещения элементов
// на странице, напрямую работает с store.
// Передает дочерним компонентам пропы для их отрисовки.
// Осуществляет запросы на сервер.Записывает полученные данные в store.
//   !!!Отвечает за передачу необходимых пропов в дочерние компоненты."

import React from "react";
import WeekTabContent from "../../components/weekTabContent/WeekTabContent";
import WeekTabs from "../../components/weekTabs/WeekTabs";

const HomePageContainer = () => {
  return (
    <>
      <WeekTabs />
      <WeekTabContent />
    </>
  );
};

export default HomePageContainer;
