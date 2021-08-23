import { useSelector } from "react-redux";
import { getRewardsPlanned } from "../../redux/tasks/tasksSelector";
import addTaskIcon from "../../images/add-task-button.svg";
import { MobileTaskFooterStyled } from "./MobileTaskFooterStyled";

const MobileTaskFooter = ({ onClickOpenModal }) => {
  const rewardsPlanned = useSelector(getRewardsPlanned);

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

  return (
    <MobileTaskFooterStyled>
      <div className="mobileFooterWrapper">
        <p className="amountText">
          <span className="plannedRewardPoints">{rewardsPlanned}</span>
          {declOfNum(rewardsPlanned, ["балл", "балла", "баллов"])}
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
