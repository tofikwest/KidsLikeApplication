import { useSelector } from "react-redux";
import { getRewardsPlanned } from "../../redux/tasks/tasksSelector";
import addTaskIcon from "../../images/add-task-button.svg";
import { MobileTaskFooterStyled } from "./MobileTaskFooterStyled";
import { declOfNumHelper } from "../../helpers/declOfNumHelper";

const MobileTaskFooter = ({ onClickOpenModal }) => {
  const rewardsPlanned = useSelector(getRewardsPlanned);

  return (
    <MobileTaskFooterStyled>
      <div className="mobileFooterWrapper">
        <p className="amountText">
          <span className="plannedRewardPoints">{rewardsPlanned}</span>
          {declOfNumHelper(rewardsPlanned, ["балл", "балла", "баллов"])}
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
