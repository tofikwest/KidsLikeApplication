import { useSelector } from "react-redux";
import { getRewardsPlanned } from "../../redux/tasks/tasksSelector";
import addTaskIcon from "../../images/add-task-button.svg";
import { MobileTaskFooterStyled } from "./MobileTaskFooterStyled";
import { declOfNumHelper } from "../../helpers/declOfNumHelper";
import { useTranslation } from "react-i18next";
import { colors } from "../../general/styles/colors";

const MobileTaskFooter = ({ onClickOpenModal }) => {
  const rewardsPlanned = useSelector(getRewardsPlanned);
  const { t } = useTranslation();

  return (
    <MobileTaskFooterStyled colors={colors}>
      <div className="mobileFooterWrapper">
        <p className="amountText">
          <span className="plannedRewardPoints">{rewardsPlanned}</span>
          {declOfNumHelper(rewardsPlanned, [
            t("one point"),
            t("point"),
            t("points"),
          ])}
        </p>
        <button
          className="addTaskButton"
          type="button"
          onClick={onClickOpenModal}
        >
          <img src={addTaskIcon} alt="add icon" />
        </button>
      </div>
    </MobileTaskFooterStyled>
  );
};

export default MobileTaskFooter;
