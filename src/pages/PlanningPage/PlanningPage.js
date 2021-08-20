import React from "react";
import { useSelector } from "react-redux";
// import { useDispatch} from "react-redux";
import CardList from "../../components/cardList/CardList";
// import { createTaskOperation } from "../../redux/tasks/tasksOperations";
import { getTasks } from "../../redux/tasks/tasksSelector";

// const initialState = {
//   title: "",
//   reward: 0,
//   fileImg: "",
// };

const PlanningPage = () => {
  // const [task, setTask] = useState({ ...initialState });
  // const dispatch = useDispatch();
  const tasks = useSelector(getTasks);

  // const onHandleChange = (e) => {
  //   const { name, value } = e.target;
  //   setTask((prev) => ({ ...prev, [name]: value }));
  // };

  // const onHandleSubmit = async (e) => {
  //   e.preventDefault();
  //   dispatch(createTaskOperation({ ...task }));
  //   setTask({ ...initialState });
  // };

  return (
    <>
      <CardList tasks={tasks} />
    </>
  );
};

export default PlanningPage;
