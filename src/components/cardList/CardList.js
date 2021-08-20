import { useLocation } from "react-router-dom";
import Card from "./card/Card";
import { CardListStyled } from "./CardListStyled";

const CardList = ({ date, tasks, dateId }) => {
  let activeTasks;

  if (useLocation().pathname === "/") {
    activeTasks = tasks.filter((task) => task.days[dateId].isActive);
  }

  return (
    <CardListStyled>
      {useLocation().pathname === "/" &&
        Boolean(tasks) &&
        activeTasks.map((task) => (
          <Card key={task._id} task={task} date={date} dateId={dateId} />
        ))}
      {useLocation().pathname === "/planning" &&
        tasks.map((task) => (
          <Card key={task._id} task={task} date={date} dateId={dateId} />
        ))}
    </CardListStyled>
  );
};

export default CardList;
