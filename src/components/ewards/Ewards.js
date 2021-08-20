import React from "react";
import CardList from "../cardList/CardList";
import TaskToggle from "../../components/taskToggle/TaskToggle";
// import Card from "../cardList/card/Card";
// import EwardsStyled from "./EwardsStyled";
// import { useDispatch } from "react-redux";
import useModal from "../../hooks/useModal";
// import { getCurrentUser } from "../../redux/auth/authOperations";
// import {
//   buyGiftOperation,
//   getGiftsOperation,
// } from "../../redux/gifts/giftOperations";
// import {
//   getTasksOperation,
//   toggleTaskOperation,
// } from "../../redux/tasks/tasksOperations";
import Modal from "../Modal/Modal";
import EwardsModal from "./ewardsModal/EwardsModal";

const Ewards = () => {
  //   const dispath = useDispatch();

  //   const giftsId = {
  //   };
  //   const giftIds = [1, 2];

  //   const onClickGet = () => {
  //     dispath(getGiftsOperation());
  //   };
  //   const onClickBay = () => {
  //     dispath(buyGiftOperation({ giftIds }));
  //   };

  //   const onHandleGetTask = () => {
  //     dispath(getCurrentUser());
  //   };

  //   const data = ["2021-08-16"];

  //   const id = "611d4d44d237860017f92e00";

  //   const onHandleClickTogle = () => {
  //     dispath(toggleTaskOperation({ data, id }));
  //   };

  const [state, setOpenModal] = useModal();

  return (
    // <EwardsStyled>
    //   <p>good </p>
    //   <Card>

    //   </Card>
    // </EwardsStyled>
    <>
      <CardList>
        <TaskToggle />
      </CardList>
      {/* <button onClick={onClickGet}>getGifts</button>
      <button onClick={onClickBay}>bayGift</button>
      <button onClick={onHandleGetTask}>getTask</button> */}
      {/* <button onClick={onHandleClickTogle}>aceptTask</button> */}
      <button onClick={setOpenModal}>Подтвердить</button>
      {state.isModalOpen && (
        <Modal handleCloseModal={setOpenModal}>
          <EwardsModal />
        </Modal>
      )}
    </>
  );
};

export default Ewards;
