import { AddCustomTaskStyled } from "./AddCustomTaskStyled";
import addTaskIcon from "../../../images/add-task-button.svg";
import { useTranslation } from "react-i18next";
import { colors } from "../../../general/styles/colors";

const AddCustomTask = ({ openModal }) => {
  const { t } = useTranslation();

  const onHandleClick = () => {
    openModal();
  };

  return (
    <AddCustomTaskStyled colors={colors}>
      <p className="addTaskText">{t("Want to get gifts add tasks")}</p>
      <button className="addTaskButton" type="button" onClick={onHandleClick}>
        <img src={addTaskIcon} alt="add task" />
      </button>
    </AddCustomTaskStyled>
  );
};

export default AddCustomTask;
