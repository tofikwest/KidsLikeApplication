import { useState } from "react";
import addIcon from "../../images/selectDay.svg";
import okIcon from "../../images/selectOk.svg";
import DayList from "../dayList/DayList";
import { TaskAddIconStyled } from "./TaskAddIconStyled";

// this component should be stateless!
// MUST recieve METHOD to change the state.

const TaskAddIcon = ({ task, taskId }) => {
  const [taskMenuState, setTaskMenuState] = useState(false);

  const onTaskStateToggle = () => {
    setTaskMenuState((taskMenuState) => !taskMenuState);
  };

  return (
    <div>
      {taskMenuState ? (
        <TaskAddIconStyled>
          <DayList days={task.days} taskId={taskId} />
          <img src={okIcon} alt="ok" onClick={onTaskStateToggle} />
        </TaskAddIconStyled>
      ) : (
        <img src={addIcon} alt="add" onClick={onTaskStateToggle} />
      )}
    </div>
  );
};

export default TaskAddIcon;
