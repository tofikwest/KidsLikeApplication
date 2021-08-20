import React from "react";
// import CardList from "../cardList/CardList";
// import TaskToggle from "../../components/taskToggle/TaskToggle";
// import Card from "../cardList/card/Card";
// import EwardsStyled from "./EwardsStyled";
import { useDispatch } from "react-redux";
import {
  buyGiftOperation,
  getGiftsOperation,
} from "../../redux/gifts/giftOperations";

const Ewards = () => {
  const dispath = useDispatch();

  return (
    // <EwardsStyled>
    //   <p>good </p>
    //   <Card>
    //     <TaskToggle />
    //   </Card>
    // </EwardsStyled>
    // <CardList></CardList>
    <>
      <button onClick={dispath(getGiftsOperation())}>getGifts</button>
      <button onClick={dispath(buyGiftOperation())}>bayGift</button>
    </>
  );
};

export default Ewards;
