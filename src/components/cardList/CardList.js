import { useState } from "react";
import { useLocation } from "react-router-dom";

import { buyGiftOperation } from "../../redux/gifts/giftOperations";
import Card from "./card/Card";
import EdwardsCart from "../ewards/edwardsCart/EdwardsCart";
import { CardListStyled } from "./CardListStyled";

const initialState = [];

const CardList = ({ selectedDate, tasks, currentDateId, awards }) => {
  const [awardsId, setAwardsId] = useState(initialState);

  const giftIds = awardsId;
  console.log(giftIds);

  const onAwardsToggle = (ewardId) => {
    setAwardsId((prev) => {
      return prev.includes(ewardId) ? [...prev] : [...prev, ewardId];
    });
  };

  let presentDay = false;
  let previousDay = false;
  let featureDay = false;
  let activeTasks;
  const location = useLocation().pathname;

  if (selectedDate === currentDateId) {
    if (location === "/") {
      activeTasks = tasks.filter((task) => task.days[currentDateId].isActive);
      presentDay = true;
    }
  } else if (selectedDate < currentDateId) {
    activeTasks = tasks.filter((task) => task.days[selectedDate].isActive);
    previousDay = true;
  } else if (selectedDate > currentDateId) {
    activeTasks = tasks.filter((task) => task.days[selectedDate].isActive);
    featureDay = true;
  }

  return (
    <CardListStyled location={location}>
      {location === "/awards" &&
        awards.map((eward) => (
          <EdwardsCart
            key={eward.id}
            eward={eward}
            onAwardsToggle={onAwardsToggle}
            awardsId={awardsId}
          />
        ))}

      {previousDay &&
        Boolean(tasks) &&
        activeTasks.map((task) => (
          <Card
            key={task._id}
            task={task}
            selectedDate={selectedDate}
            previousDay={previousDay}
          />
        ))}
      {presentDay &&
        Boolean(tasks) &&
        activeTasks.map((task) => (
          <Card
            key={task._id}
            task={task}
            currentDateId={currentDateId}
            presentDay={presentDay}
          />
        ))}
      {featureDay &&
        Boolean(tasks) &&
        activeTasks.map((task) => <Card key={task._id} task={task} />)}
      {location === "/planning" &&
        tasks.map((task) => (
          <Card key={task._id} task={task} currentDateId={currentDateId} />
        ))}
    </CardListStyled>
  );
};

export default CardList;
