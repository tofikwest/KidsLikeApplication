import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { colors } from "../../../general/styles/colors";
import { declOfNumHelper } from "../../../helpers/declOfNumHelper";
import { getSelectedDateId } from "../../../redux/planningTasks/planningTasksSelector";
import {
  setDaysSingleTaskOperation,
  toggleTaskOperation,
} from "../../../redux/tasks/tasksOperations";
import TaskAddIcon from "../../taskAddIcon/TaskAddIcon";
import TaskStatusIcon from "../../taskStatusIcon/TaskStatusIcon";
import TaskToggle from "../../taskToggle/TaskToggle";
import { CardItemStyled } from "./CardStyled";

const Card = ({
  task,
  currentDateId,
  selectedDate,
  previousDay,
  presentDay,
}) => {
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const selectedDropdownDate = useSelector(getSelectedDateId);
  const { t } = useTranslation();

  const onTaskToggle = (taskId) => {
    const date = { date: task.days[currentDateId].date };

    dispatch(toggleTaskOperation({ taskId, date }));
  };

  const isExactDate = () => {
    return selectedDropdownDate !== "default";
  };

  const selectedDateStatus = () => {
    if (!isExactDate(selectedDropdownDate)) return 0;
    return selectedDropdownDate;
  };

  const taskStatusRequest = (taskId) => {
    let dataInitial = task.days.map((day) => day.isActive);
    const previousValue = task.days[selectedDropdownDate].isActive;
    dataInitial.splice(selectedDropdownDate, 1, !previousValue);

    const daysOfTask = { days: dataInitial };

    dispatch(setDaysSingleTaskOperation(taskId, daysOfTask));
  };

  console.log("location", location);

  return (
    <CardItemStyled location={location} colors={colors}>
      <div className="card">
        <img className="card__image" src={task.imageUrl} alt={t(task.title)} />
        <div className="card__footer">
          <div className="card__info">
            <h3 className="card__taskName">{t(task.title)} </h3>
            <span className="card__rewardTag">{`${
              task.reward
            } ${declOfNumHelper(task.reward, [
              t("one point"),
              t("point"),
              t("points"),
            ])}`}</span>
          </div>
          {location === "/" && presentDay && (
            <TaskToggle
              taskId={task._id}
              isChecked={task.days[currentDateId].isCompleted}
              onTaskToggle={onTaskToggle}
            />
          )}
          {location === "/" && previousDay && (
            <TaskStatusIcon
              completionStatus={task.days[selectedDate].isCompleted}
            />
          )}
          {location === "/planning" ? (
            <TaskAddIcon
              task={task}
              taskId={task._id}
              exactDate={isExactDate()}
              isTaskScheduled={task.days[selectedDateStatus()].isActive}
              taskStatusRequest={taskStatusRequest}
            />
          ) : null}
        </div>
      </div>
    </CardItemStyled>
  );
};

export default Card;
