import { AddCustomTaskStyled } from "./AddCustomTaskStyled";
import addTaskIcon from "../../../images/add-task-button.svg";

const AddCustomTask = () => {
  return (
    <AddCustomTaskStyled>
      <p className="addTaskText">
        Хочешь получить больше призов - добавь задачи :)
      </p>
      <button className="addTaskButton" type="button">
        <img src={addTaskIcon} alt="asas" />
      </button>
    </AddCustomTaskStyled>
  );
};

export default AddCustomTask;
