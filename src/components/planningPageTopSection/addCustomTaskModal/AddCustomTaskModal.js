import { useState } from "react";
import { AddCustomTaskModalStyled } from "./AddCustomTaskModalStyled";
import addImageIcon from "../../../images/add-image.svg";
import penIcon from "../../../images/pen-modal.svg";
import closeModalImg from "../../../images/close-modal.svg";
import { useDispatch } from "react-redux";
import { createTaskOperation } from "../../../redux/tasks/tasksOperations";
import { colors } from "../../../general/styles/colors";

const AddCustomTaskModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState("");
  const [reward, setReward] = useState("");

  const onHandleCloseClick = () => {
    closeModal();
  };

  const onHandleChangeTaskName = (e) => {
    setTaskName(e.target.value);
  };

  const onHandleChangeReward = (e) => {
    setReward(e.target.value);
  };

  const onHandleSubmit = (e) => {
    e.preventDefault();

    const task = {
      title: taskName,
      reward,
    };

    dispatch(createTaskOperation(task));
  };

  return (
    <AddCustomTaskModalStyled colors={colors}>
      <img
        className="closeModalImg"
        src={closeModalImg}
        alt="close"
        onClick={onHandleCloseClick}
      />
      <form className="modalForm" onSubmit={onHandleSubmit}>
        <div className="modalTopWrapper">
          <label className="modalImageLabel" htmlFor="image">
            <img className="modalImage" src={addImageIcon} alt="add-icon" />
          </label>
          <input className="modalImageInput" type="text" id="image" />
        </div>
        <div className="modalBottomWrapper">
          <label className="modalInputLabel">
            <img className="modalInputPenImg" src={penIcon} alt="pen" />
            <input
              className="modalInput"
              type="text"
              placeholder="Добавить задание..."
              value={taskName}
              onChange={onHandleChangeTaskName}
            />
          </label>

          <label className="modalInputLabel">
            <img className="modalInputPenImg" src={penIcon} alt="pen" />
            <input
              className="modalInput"
              type="number"
              placeholder="Добавить баллы..."
              value={reward}
              onChange={onHandleChangeReward}
            />
          </label>
          <button className="modalButton" type="submit">
            Ок
          </button>
        </div>
      </form>
    </AddCustomTaskModalStyled>
  );
};

export default AddCustomTaskModal;
