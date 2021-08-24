import React from "react";
import { useSelector } from "react-redux";
import CardList from "../../components/cardList/CardList";
import Footer from "../../components/footer/Footer";
import MobileTaskFooter from "../../components/mobileTaskFooter/MobileTaskFooter";
import Modal from "../../components/Modal/Modal";
import AddCustomTaskModal from "../../components/planningPageTopSection/addCustomTaskModal/AddCustomTaskModal";
import PlanningPageTopSection from "../../components/planningPageTopSection/PlanningPageTopSection";
import useModal from "../../hooks/useModal";
import { getTasks } from "../../redux/tasks/tasksSelector";

const PlanningPage = () => {
  const [stateModal, setOpenModal] = useModal();

  const onClickOpenModal = () => {
    setOpenModal();
  };

  const tasks = useSelector(getTasks);

  return (
    <>
      <PlanningPageTopSection
        openModal={onClickOpenModal}
        isMobile={stateModal.width < stateModal.breakPointUserMenu}
        isDesktop={stateModal.width > stateModal.breakPointNavigation}
      />
      <CardList tasks={tasks} />

      {stateModal.isModalOpen && (
        <Modal handleCloseModal={setOpenModal}>
          <AddCustomTaskModal closeModal={setOpenModal} />
        </Modal>
      )}
      <Footer />
      {stateModal.width < stateModal.breakPointUserMenu && (
        <MobileTaskFooter onClickOpenModal={onClickOpenModal} />
      )}
    </>
  );
};

export default PlanningPage;
