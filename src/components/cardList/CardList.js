import Card from "./card/Card";
import { CardListStyled } from "./CardListStyled";

const CardList = ({ date, tasks, children }) => {
  return (
    <CardListStyled>
      {tasks.map((task) => (
        <Card key={task._id} {...task} date={date} children={children}></Card>
      ))}
    </CardListStyled>
  );
};

export default CardList;
