import { DayListStyled } from "./DayListStyled";
import checkedIcon from "../../images/checkbox-true.svg";
import uncheckedIcon from "../../images/checkbox-false.svg";
import { useDispatch } from "react-redux";
import { setDaysSingleTaskOperation } from "../../redux/tasks/tasksOperations";
import { colors } from "../../general/styles/colors";

const DayList = ({ days, taskId }) => {
  const dispatch = useDispatch();
  const dataInitial = days.map((day) => day.isActive);

  const getLocalShortDayName = (date) => {
    const formatDate = new Date(date);
    let options = { weekday: "short" };
    const weekday = new Intl.DateTimeFormat("ru-RU", options).format(
      formatDate
    );

    return weekday;
  };

  const onHandleChange = (e) => {
    dataInitial.splice(+e.target.value, 1, e.target.checked);
    const daysOfTask = { days: dataInitial };

    dispatch(setDaysSingleTaskOperation(taskId, daysOfTask));
  };

  const getDateId = (dateData) => {
    const newDate = new Date(dateData);
    const weekday = newDate.getDay();
    if (weekday === 0) return 6;
    else return weekday - 1;
  };

  return (
    <DayListStyled colors={colors}>
      {days.map((day) => (
        <li className="dayListItem" key={day._id}>
          <input
            className="dayListCheckbox visually-hidden"
            name={day._id}
            id={day.date}
            type="checkbox"
            value={getDateId(day.date)}
            checked={day.isActive}
            onChange={onHandleChange}
          />

          <label htmlFor={day.date} className="dayListValue">
            {day.isActive ? (
              <img
                className="dayListCheckboxIcon"
                src={checkedIcon}
                alt={day._id}
              />
            ) : (
              <img
                className="dayListCheckboxIcon"
                src={uncheckedIcon}
                alt={day._id}
              />
            )}
            {getLocalShortDayName(day.date)}
          </label>
        </li>
      ))}
    </DayListStyled>
  );
};

export default DayList;
