import { useDispatch, useSelector } from "react-redux";
import { declOfNumHelper } from "../../../helpers/declOfNumHelper";
import { setSelectedDateId } from "../../../redux/planningTasks/planningTasksAction";
import {
  getEndWeekDate,
  getRewardsPlanned,
  getStartWeekDate,
} from "../../../redux/tasks/tasksSelector";
import DateDropdown from "../dateDropdown/DateDropdown";
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

  const onSelectDate = (value) => {
    console.log(`value`, value);
    dispatch(setSelectedDateId(value));
  };

  const startingDate = configuredStartingDate();
  const endingDate = configuredDate(endWeekDate, 0);
  const commonValue = `${startingDate} - ${endingDate}`;

  return (
    <PlanningPointsStyled>
      <span className="weekPlansText">
        План на неделю:
        {isMobile || (!isMobile && !isDesktop) ? (
          <DateDropdown
            configuredDate={configuredDate}
            startWeekDate={startWeekDate}
            startingDate={startingDate}
            endingDate={endingDate}
            onSelectDate={onSelectDate}
            commonValue={commonValue}
          />
        ) : (
          <span className="weekPlansDate">{commonValue}</span>
        )}
      </span>

      {!isMobile && (
        <p className="totalWeekPlans">
          Определены задач на
          <span className="totalWeekPlansNumber">{rewardsPlanned}</span>
          {declOfNumHelper(rewardsPlanned, ["балл", "балла", "баллов"])}
        </p>
      )}
    </PlanningPointsStyled>
  );
};

export default PlanningPoints;
