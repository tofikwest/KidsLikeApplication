import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { colors } from "../../../general/styles/colors";
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
  const { t } = useTranslation();

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
    dispatch(setSelectedDateId(value));
  };

  const startingDate = configuredStartingDate();
  const endingDate = configuredDate(endWeekDate, 0);
  const commonValue = `${startingDate} - ${endingDate}`;

  return (
    <PlanningPointsStyled colors={colors}>
      <span className="weekPlansText">
        {t("Plan for the week")}
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
          {t("Defined tasks")}
          <span className="totalWeekPlansNumber">{rewardsPlanned}</span>
          {declOfNumHelper(rewardsPlanned, [
            t("one point"),
            t("point"),
            t("points"),
          ])}
        </p>
      )}
    </PlanningPointsStyled>
  );
};

export default PlanningPoints;
