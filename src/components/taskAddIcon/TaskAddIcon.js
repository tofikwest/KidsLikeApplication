import { useEffect, useState } from "react";
import addIcon from "../../images/selectDay.svg";
import okIcon from "../../images/selectOk.svg";
import DayList from "../dayList/DayList";
import { TaskAddIconStyled } from "./TaskAddIconStyled";

const TaskAddIcon = ({
  task,
  taskId,
  exactDate,
  isTaskScheduled,
  taskStatusRequest,
}) => {
  const [taskMenuState, setTaskMenuState] = useState(false);
  useEffect(() => {
    window.addEventListener("click", closeDayList);
    return () => {
      window.removeEventListener("click", closeDayList);
    };
  });

  const closeDayList = (e) => {
    if (
      e?.path[0]?.attributes[2]?.nodeValue !== taskId &&
      e.target.nodeName !== "LABEL" &&
      e.target.nodeName !== "INPUT"
    )
      setTaskMenuState(false);
  };

  const onTaskStateToggle = (e) => {
    if (!exactDate) {
      return setTaskMenuState((taskMenuState) => !taskMenuState);
    } else {
      taskStatusRequest(taskId);
    }
  };

  return (
    <div>
      <TaskAddIconStyled>
        {taskMenuState && !exactDate && (
          <DayList days={task.days} taskId={taskId} />
        )}

        {!exactDate ? (
          <>
            {taskMenuState ? (
              <img
                src={okIcon}
                alt="ok"
                onClick={onTaskStateToggle}
                idatt={taskId}
              />
            ) : (
              <img
                src={addIcon}
                alt="add"
                onClick={onTaskStateToggle}
                idatt={taskId}
              />
            )}
          </>
        ) : (
          <>
            {isTaskScheduled ? (
              <img src={okIcon} alt="ok" onClick={onTaskStateToggle} />
            ) : (
              <img src={addIcon} alt="add" onClick={onTaskStateToggle} />
            )}
          </>
        )}
      </TaskAddIconStyled>
    </div>
  );
};

export default TaskAddIcon;
