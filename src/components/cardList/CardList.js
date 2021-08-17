import Card from "../card/Card";
// import TaskStatusIcon from "../taskStatusIcon/TaskStatusIcon";
import TaskToggle from "../taskToggle/TaskToggle";
import { CardListStyled } from "./CardListStyled";
import { tasks } from "./TempData"; // временная замена ответу от бека

const CardList = () => {
  return (
    <CardListStyled>
      {tasks.map((task) => (
        <Card key={task.id} {...task} children={<TaskToggle />} />
      ))}
    </CardListStyled>
  );
};

export default CardList;
