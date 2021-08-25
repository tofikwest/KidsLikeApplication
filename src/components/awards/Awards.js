import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  buyGiftOperation,
  getGiftsOperation,
} from "../../redux/gifts/giftOperations";
import { getAwards } from "../../redux/gifts/giftsSelectors";
import useModal from "../../hooks/useModal";
import CardList from "../cardList/CardList";
// import TaskToggle from "../../components/taskToggle/TaskToggle";
import Modal from "../Modal/Modal";
import Footer from "../footer/Footer";
import AwardsModal from "./awardsModal/AwardsModal";
import ProgressBar from "../progressBar/ProgressBar";

import AwardsStyled from "./AwardsStyled";
import sprite from "../../images/sprite.svg";
import { colors } from "../../general/styles/colors";
import { toggleAwardsResetSuccess } from "../../redux/gifts/giftsAction";

const initialState = [];

const Awards = () => {
  const [giftIds, setGiftIdsState] = useState(initialState);
  const [stateModal, setOpenModal, setOptionModal] = useModal();
  const dispath = useDispatch();
  const awards = useSelector(getAwards);
  const location = useLocation();

  useEffect(() => {
    dispath(getGiftsOperation());
    stateModal.isModalOpen && dispath(toggleAwardsResetSuccess());
    location.pathname === "/awards"
      ? setOptionModal((prev) => ({ ...prev, modalName: "awards" }))
      : setOptionModal((prev) => ({ ...prev, modalName: "header" }));
  }, [location, stateModal.isModalOpen]);

  // ++++++++++++++++++++++++++++++++Logic giftsId++++++++++++++++++++++++++++++++++++++++

  const onToggleGetAwardsId = (awardId) => {
    setGiftIdsState((prev) => {
      return prev.includes(awardId) ? [...prev] : [...prev, awardId];
    });
  };

  const onHandleClickConfirm = () => {
    dispath(buyGiftOperation({ giftIds }));
    setOpenModal();
    setGiftIdsState(initialState);
  };
  // ++++++++++++++++++++++++++++++++Logic giftsId+++++++++++++++++++++++++++++++++++++++++

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
      <Footer />
      {stateModal.width < stateModal.breakPointUserMenu && <ProgressBar />}
      {stateModal.isModalOpen && (
        <Modal handleCloseModal={setOpenModal} modalName={stateModal.modalName}>
          <AwardsModal setOpenModal={setOpenModal} />
        </Modal>
      )}
    </AwardsStyled>
  );
};

export default Awards;
