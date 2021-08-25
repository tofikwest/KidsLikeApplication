import { HomePageStyled } from "./HomePageStyled";
import WeekTabs from "../../components/weekDayTime/weekTabs/WeekTabs";
import WeekTabContent from "../../components/weekDayTime/weekTabContent/WeekTabContent";
import { colors } from "../../general/styles/colors";
import Footer from "../../components/footer/Footer";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import CurrentDay from "../../components/weekDayTime/currentDay/CurrentDay";
import CurrentWeek from "../../components/weekDayTime/currentWeek/CurrentWeek";
import HomeMobileFooter from "../../components/homeFooter/HomeMobileFooter";
import useModal from "../../hooks/useModal";
import { useSelector } from "react-redux";
import { getTasks } from "../../redux/tasks/tasksSelector";
import AddCustomTaskModal from "../../components/planningPageTopSection/addCustomTaskModal/AddCustomTaskModal";
import Modal from "../../components/Modal/Modal";

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

  useEffect(() => {
    const date = new Date();
    let options = { weekday: "long" };
    const currentDayOfTheWeek = new Intl.DateTimeFormat(
      "en-US",
      options
    ).format(date);

    setState((prevState) => ({ ...prevState, search: currentDayOfTheWeek }));
  }, []);

  const handleResizeWindow = () => {
    setState((prev) => ({ ...prev, width: window.innerWidth }));
  };

  const choosenDate = (date) => {
    setState((prevState) => ({ ...prevState, search: date }));
  };

  const [stateModal, setOpenModal] = useModal();

  const onClickOpenModal = () => {
    setOpenModal();
  };

  const tasks = useSelector(getTasks);

  return (
    <HomePageStyled colors={colors}>
      {state.width < state.breakPoint && state.width >= 768 && (
        <div className="upside-bar">
          <CurrentWeek />
          <WeekTabs selectedDate={state.search} choosenDate={choosenDate} />
        </div>
      )}

      {state.width >= state.breakPoint && (
        <div className="home-sidebar">
          <WeekTabs selectedDate={state.search} choosenDate={choosenDate} />
        </div>
      )}

      {state.width < 767 && (
        <>
          <WeekTabs selectedDate={state.search} choosenDate={choosenDate} />
          <>
            <CurrentDay selectedDate={state.search} />
          </>
        </>
      )}

      <div className="right-side">
        <WeekTabContent
          selectedDate={state.search}
          choosenDateTab={state.search}
        />
        {stateModal.isModalOpen && (
          <Modal handleCloseModal={setOpenModal}>
            <AddCustomTaskModal closeModal={setOpenModal} />
          </Modal>
        )}
        {state.width <= 320 ? (
          <>
            {tasks && <Footer />}
            <HomeMobileFooter onClickOpenModal={onClickOpenModal} />
          </>
        ) : (
          <Footer />
        )}
      </div>
    </HomePageStyled>
  );
};

export default HomePage;
