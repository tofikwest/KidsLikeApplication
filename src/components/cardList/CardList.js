import Card from "./card/Card";
import { CardListStyled } from "./CardListStyled";
import { tasks } from "./TempData"; // временная замена ответу от бека

const CardList = ({ children }) => {
  return (
    <CardListStyled>
      {tasks.map((task) => (
        <Card key={task.id} {...task} children={children} />
      ))}
    </CardListStyled>
  );
};

export default CardList;
