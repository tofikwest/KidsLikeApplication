import addTaskIcon from "../../images/add-task-button.svg";
import { HomeMobileFooterStyled } from "./HomeMobileFooterStyled";
import ProgressBarMobile from "../progressBar/ProgressBarMobile";
import { colors } from "../../general/styles/colors";

const HomeMobileFooter = ({ onClickOpenModal }) => {
  return (
    <HomeMobileFooterStyled colors={colors}>
      <div className="homeMobileFooterWrapper">
        <ProgressBarMobile />

        <button
          className="addTaskButton"
          type="button"
          onClick={onClickOpenModal}
        >
          <img src={addTaskIcon} alt="add icon" />
        </button>
      </div>
    </HomeMobileFooterStyled>
  );
};

export default HomeMobileFooter;
