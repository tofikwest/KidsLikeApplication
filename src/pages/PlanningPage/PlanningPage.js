import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CardList from "../../components/cardList/CardList";
import Footer from "../../components/footer/Footer";
import MobileTaskFooter from "../../components/mobileTaskFooter/MobileTaskFooter";
import Modal from "../../components/Modal/Modal";
import AddCustomTaskModal from "../../components/planningPageTopSection/addCustomTaskModal/AddCustomTaskModal";
import PlanningPageTopSection from "../../components/planningPageTopSection/PlanningPageTopSection";
import { getTasks } from "../../redux/tasks/tasksSelector";

const initialState = {
  width: window.innerWidth,
  tabletBreakpoint: 768,
  desktopBreakpoint: 1280,
  isModalOpen: false,
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

  const onClickOpenModal = () => {
    setState((prevState) => ({ ...prevState, isModalOpen: true }));
  };

  const closeModal = () => {
    setState((prevState) => ({ ...prevState, isModalOpen: false }));
  };

  const tasks = useSelector(getTasks);

  return (
    <>
      <PlanningPageTopSection
        openModal={onClickOpenModal}
        isMobile={state.width < state.tabletBreakpoint}
        isDesktop={state.width > state.desktopBreakpoint}
      />
      <CardList tasks={tasks} />

      {state.isModalOpen && (
        <Modal>
          <AddCustomTaskModal closeModal={closeModal} />
        </Modal>
      )}
      <Footer />
      {state.width < state.tabletBreakpoint && (
        <MobileTaskFooter onClickOpenModal={onClickOpenModal} />
      )}
    </>
  );
};

export default PlanningPage;
