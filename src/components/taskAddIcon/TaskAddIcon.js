import { useState } from "react";
import addIcon from "../../images/selectDay.svg";
import okIcon from "../../images/selectOk.svg";
import DayList from "../dayList/DayList";

// this component should be stateless!
// MUST recieve METHOD to change the state.

const TaskAddIcon = () => {
  const [taskMenuState, setTaskMenuState] = useState(false);

  const onTaskStateToggle = () => {
    setTaskMenuState((taskMenuState) => !taskMenuState);
  };

  return (
    <>
      {taskMenuState ? (
        <>
          <DayList />
          <img src={okIcon} alt="ok" onClick={onTaskStateToggle} />
        </>
      ) : (
        <img src={addIcon} alt="add" onClick={onTaskStateToggle} />
      )}
    </>
  );
};

export default TaskAddIcon;
