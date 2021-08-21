import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { toggleTaskOperation } from "../../../redux/tasks/tasksOperations";
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

  function declOfNum(n, text) {
    n = Math.abs(n) % 100;
    const n1 = n % 10;
    if (n > 10 && n < 20) {
      return text[2];
    }
    if (n1 > 1 && n1 < 5) {
      return text[1];
    }
    if (n1 === 1) {
      return text[0];
    }
    return text[2];
  }

  const onTaskToggle = (taskId) => {
    const date = { date: task.days[currentDateId].date };

    dispatch(toggleTaskOperation({ taskId, date }));
  };

  return (
    <CardItemStyled>
      <div className="card">
        <img className="card__image" src={task.imageUrl} alt={task.title} />
        <div className="card__footer">
          <div className="card__info">
            <h3 className="card__taskName">{task.title}</h3>
            <span className="card__rewardTag">{`${task.reward} ${declOfNum(
              task.reward,
              ["балл", "балла", "баллов"]
            )}`}</span>
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
            <TaskAddIcon task={task} taskId={task._id} />
          ) : null}
        </div>
      </div>
    </CardItemStyled>
  );
};

export default Card;
