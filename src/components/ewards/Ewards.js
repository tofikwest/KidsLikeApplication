import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  buyGiftOperation,
  getGiftsOperation,
} from "../../redux/gifts/giftOperations";
import CardList from "../cardList/CardList";
import TaskToggle from "../../components/taskToggle/TaskToggle";
import EwardsModal from "./ewardsModal/EwardsModal";
import Modal from "../Modal/Modal";

// import EwardsStyled from "./EwardsStyled";
import useModal from "../../hooks/useModal";
import { getAwards } from "../../redux/gifts/giftsSelectors";
import { useLocation } from "react-router-dom";

const Ewards = () => {
  const [state, setOpenModal, setState] = useModal();
  const dispath = useDispatch();
  const awards = useSelector(getAwards);
  const location = useLocation();
  //   console.log(awards);

  const giftIds = [1, 2];
  useEffect(() => {
    dispath(getGiftsOperation());
    dispath(buyGiftOperation({ giftIds }));

    location.pathname === "/awards"
      ? setState((prev) => ({ ...prev, modalName: "awards" }))
      : setState((prev) => ({ ...prev, modalName: "header" }));
  }, [location]);

  console.log(location);
  console.log(state.modalName);

  return (
    <>
      <CardList>
        <TaskToggle />
      </CardList>

      <button onClick={setOpenModal}>Подтвердить</button>
      {state.isModalOpen && (
        <Modal handleCloseModal={setOpenModal} modalName={state.modalName}>
          <EwardsModal setOpenModal={setOpenModal} />
        </Modal>
      )}
    </>
  );
};

export default Ewards;
