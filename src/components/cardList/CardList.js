import { useLocation } from "react-router-dom";
import Card from "./card/Card";
import { CardListStyled } from "./CardListStyled";

const CardList = ({ selectedDate, tasks, currentDateId }) => {
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
