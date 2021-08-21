import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardList from "../../components/cardList/CardList";
import Footer from "../../components/footer/Footer";
import PlanningPageTopSection from "../../components/planningPageTopSection/PlanningPageTopSection";
import { getTasks } from "../../redux/tasks/tasksSelector";

const initialState = {
  width: window.innerWidth,
  tabletBreakpoint: 768,
  desktopBreakpoint: 1280,
};

const PlanningPage = () => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  });

  const handleResizeWindow = () => {
    setState((prev) => ({ ...prev, width: window.innerWidth }));
  };

  const tasks = useSelector(getTasks);

  return (
    <>
      <PlanningPageTopSection isMobile={state.width < state.tabletBreakpoint} />
      <CardList tasks={tasks} />

      {/* <NewTaskModal /> */}
      <Footer />
    </>
  );
};

export default PlanningPage;
