import { useDispatch, useSelector } from "react-redux";
import { setSelectedDateId } from "../../../redux/planningTasks/planningTasksAction";
import {
  getEndWeekDate,
  getRewardsPlanned,
  getStartWeekDate,
} from "../../../redux/tasks/tasksSelector";
import { PlanningPointsStyled } from "./PlanningPointsStyled";

const PlanningPoints = ({ isMobile, isDesktop }) => {
  const dispatch = useDispatch();
  const startWeekDate = useSelector(getStartWeekDate);
  const endWeekDate = useSelector(getEndWeekDate);
  const rewardsPlanned = useSelector(getRewardsPlanned);

  const configuredStartingDate = () => {
    const date = new Date(startWeekDate);
    const day = date.getDate();
    return day;
  };

  const configuredDate = (dateToConfigure, datesFromInitial) => {
    let date = new Date(dateToConfigure);
    date.setDate(date.getDate() + datesFromInitial);

    const day = date.getDate();
    let month = date.getMonth() + 1;
    const year = date.getFullYear();

    if (month.toString().length === 1) {
      month = "0" + month;
    }

    return `${day}.${month}.${year}`;
  };

  const onSelectDate = (e) => {
    dispatch(setSelectedDateId(e.target.value));
  };

  const startingDate = configuredStartingDate();
  const endingDate = configuredDate(endWeekDate, 0);

  return (
    <PlanningPointsStyled>
      <p className="weekPlansText">
        План на неделю:
        {isMobile || (!isMobile && !isDesktop) ? (
          <select
            className="weekPlansDaySelector"
            name="date"
            id="date"
            onChange={onSelectDate}
          >
            <option
              className="weekPlansDay"
              value="default"
            >{`${startingDate} - ${endingDate}`}</option>
            <option className="weekPlansDay" value="0">
              {`${configuredDate(startWeekDate, 0)} - Пн`}
            </option>
            <option className="weekPlansDay" value="1">
              {`${configuredDate(startWeekDate, 1)} - Вт`}
            </option>
            <option className="weekPlansDay" value="2">
              {`${configuredDate(startWeekDate, 2)} - Ср`}
            </option>
            <option className="weekPlansDay" value="3">
              {`${configuredDate(startWeekDate, 3)} - Чт`}
            </option>
            <option className="weekPlansDay" value="4">
              {`${configuredDate(startWeekDate, 4)} - Пт`}
            </option>
            <option className="weekPlansDay" value="5">
              {`${configuredDate(startWeekDate, 5)} - Сб`}
            </option>
            <option className="weekPlansDay" value="6">
              {`${configuredDate(startWeekDate, 6)} - Вс`}
            </option>
          </select>
        ) : (
          <span className="weekPlansDate">{`${configuredStartingDate()} - ${configuredDate(
            endWeekDate,
            0
          )}`}</span>
        )}
      </p>

      {!isMobile && (
        <p className="totalWeekPlans">
          Определены задач на
          <span className="totalWeekPlansNumber">{rewardsPlanned}</span> баллов
        </p>
      )}
    </PlanningPointsStyled>
  );
};

export default PlanningPoints;
