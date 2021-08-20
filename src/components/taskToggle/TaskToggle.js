import Switch from "react-switch";
import { ReactComponent as ExclIcon } from "../../images/excl.svg";
import { ReactComponent as ThickIcon } from "../../images/thick.svg";
// this component should be stateless!
// MUST recieve METHOD to change the state.

const TaskToggle = ({ onTaskToggle, taskId, isChecked }) => {
  const onTaskStateToggle = () => {
    onTaskToggle(taskId);
  };

  return (
    <Switch
      height={18}
      width={40}
      onColor="#8EC63F"
      offColor="#FF4965"
      onHandleColor="#ffffff"
      uncheckedIcon={<ExclIcon />}
      checkedIcon={<ThickIcon />}
      handleDiameter={14}
      boxShadow="0px 1px 1px rgba(0, 0, 0, 0.25)"
      onChange={onTaskStateToggle}
      checked={isChecked}
    ></Switch>
  );
};

export default TaskToggle;
