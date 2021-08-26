import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  buyGiftOperation,
  getGiftsOperation,
} from "../../redux/gifts/giftOperations";
import { getAwards, getAwardsError } from "../../redux/gifts/giftsSelectors";
// import {
//   getGiftsSuccess,
//   toggleAwardsResetSuccess,
//   toggleAwardsResetSuccessT,
// } from "../../redux/gifts/giftsAction";
import useModal from "../../hooks/useModal";
import CardList from "../cardList/CardList";
import Modal from "../Modal/Modal";
import Footer from "../footer/Footer";
import AwardsModal from "./awardsModal/AwardsModal";
import ProgressBar from "../progressBar/ProgressBar";
import AwardsError from "./awardsError/AwardsError";

import AwardsStyled from "./AwardsStyled";
import sprite from "../../images/sprite.svg";
import { colors } from "../../general/styles/colors";

import HomeMobileFooter from "../homeFooter/HomeMobileFooter";
import { getTasks } from "../../redux/tasks/tasksSelector";
import AddCustomTaskModal from "../planningPageTopSection/addCustomTaskModal/AddCustomTaskModal";
const initialState = [];

const Awards = () => {
  const [giftIds, setGiftIdsState] = useState(initialState);
  const [stateModal, setOpenModal, setOpenModalTask, setOptionModal] =
    useModal();
  const dispath = useDispatch();
  const awards = useSelector(getAwards);
  const error = useSelector(getAwardsError);
  const location = useLocation();

  useEffect(() => {
    dispath(getGiftsOperation());
    location.pathname === "/awards"
      ? setOptionModal((prev) => ({ ...prev, modalName: "awards" }))
      : setOptionModal((prev) => ({ ...prev, modalName: "header" }));
  }, [location, setOptionModal, dispath]);

  // ++++++++++++++++++++++++++++++++Logic giftsId++++++++++++++++++++++++++++++++++++++++

  const onToggleGetAwardsId = (awardId) => {
    setGiftIdsState((prev) => {
      return prev.includes(awardId)
        ? [...prev].filter((item) => item !== awardId)
        : [...prev, awardId];
    });
  };

  const onHandleClickConfirm = async () => {
    dispath(buyGiftOperation({ giftIds }, setOpenModal));
    dispath(getGiftsOperation());
    setGiftIdsState(initialState);
  };

  // ++++++++++++++++++++++++++++++++Logic giftsId+++++++++++++++++++++++++++++++++++++++++

  const onClickOpenModalTask = () => {
    setOpenModalTask();
  };

  const tasks = useSelector(getTasks);
  return (
    <AwardsStyled colors={colors}>
      <div className="awardsProgresiveBox">
        <div className="awardsLogo">
          <svg className="awardSvg">
            <use href={sprite + "#icon-award"} />
          </svg>
          <h3 className="awardsTitle">Мои призы</h3>
        </div>
        {stateModal.width > stateModal.breakPointUserMenu && <ProgressBar />}
      </div>
      <CardList awards={awards} onToggleGetAwardsId={onToggleGetAwardsId} />

      <button className="awardsBtn" onClick={onHandleClickConfirm}>
        Подтвердить
      </button>

      <AwardsError error={error} />

      {stateModal.isModalOpen && (
        <Modal handleCloseModal={setOpenModal} modalName={stateModal.modalName}>
          <AwardsModal setOpenModal={setOpenModal} giftIds={giftIds} />
        </Modal>
      )}

      {stateModal.width <= 320 ? (
        <>
          {tasks && <Footer />}
          <HomeMobileFooter onClickOpenModal={onClickOpenModalTask} />

          {stateModal.isModalOpenTask && (
            <Modal handleCloseModal={setOpenModalTask}>
              <AddCustomTaskModal closeModal={setOpenModalTask} />
            </Modal>
          )}
        </>
      ) : (
        <Footer />
      )}
    </AwardsStyled>
  );
};

export default Awards;
