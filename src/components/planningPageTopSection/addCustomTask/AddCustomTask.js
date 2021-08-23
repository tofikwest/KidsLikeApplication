import { AddCustomTaskStyled } from "./AddCustomTaskStyled";
import addTaskIcon from "../../../images/add-task-button.svg";

const AddCustomTask = ({ openModal }) => {
  const onHandleClick = () => {
    openModal();
  };

  return (
    <AddCustomTaskStyled>
      <p className="addTaskText">
        Хочешь получить больше призов - добавь задачи :)
      </p>
      <button className="addTaskButton" type="button" onClick={onHandleClick}>
        <img src={addTaskIcon} alt="add task" />
      </button>
    </AddCustomTaskStyled>
  );
};

export default AddCustomTask;
