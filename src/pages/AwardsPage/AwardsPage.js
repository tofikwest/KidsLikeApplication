import CardList from "../../components/cardList/CardList";
import TaskToggle from "../../components/taskToggle/TaskToggle";
// Временно обычные карточки пока, т.к. еще не настроен ответ от бека (по нему отрисовка карточек будет)

const AwardsPage = () => {
  return (
    <CardList>
      <TaskToggle />
    </CardList>
  );
};

export default AwardsPage;
