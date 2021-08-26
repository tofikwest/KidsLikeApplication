import { useState } from "react";
import { AddCustomTaskModalStyled } from "./AddCustomTaskModalStyled";
import addImageIcon from "../../../images/add-image.svg";
import penIcon from "../../../images/pen-modal.svg";
import closeModalImg from "../../../images/close-modal.svg";
import { useDispatch } from "react-redux";
import { createTaskOperation } from "../../../redux/tasks/tasksOperations";
import { useTranslation } from "react-i18next";

const AddCustomTaskModal = ({ closeModal }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  //   const [image, setImage] = useState(
  //     "https://cdn.pixabay.com/photo/2016/03/31/18/32/default-1294448_960_720.png"
  //   );
  const [taskName, setTaskName] = useState("");
  const [reward, setReward] = useState("");

  const onHandleCloseClick = () => {
    closeModal();
  };

  //   const onHandleChangeImage = (e) => {
  //     setImage(e.target.value);
  //   };

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
      //   file: image,
    };
    console.log(`task`, task);
    dispatch(createTaskOperation(task));
  };

  return (
    <AddCustomTaskModalStyled>
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
          <input
            className="modalImageInput"
            type="text"
            id="image"
            // onChange={onHandleChangeImage}
          />
        </div>
        <div className="modalBottomWrapper">
          <label className="modalInputLabel">
            <img className="modalInputPenImg" src={penIcon} alt="pen" />
            <input
              className="modalInput"
              type="text"
              placeholder={t("Add task")}
              value={taskName}
              onChange={onHandleChangeTaskName}
            />
          </label>

          <label className="modalInputLabel">
            <img className="modalInputPenImg" src={penIcon} alt="pen" />
            <input
              className="modalInput"
              type="number"
              placeholder={t("Add points")}
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
