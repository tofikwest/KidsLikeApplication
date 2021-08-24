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
import EwardsModal from "./awardsModal/AwardsModal";
import ProgressBar from "../progressBar/ProgressBar";

import EwardsStyled from "./AwardsStyled";
import sprite from "../../images/sprite.svg";
import { colors } from "../../general/styles/colors";

// const initialState = {
//   giftIds: [],
// };
const initialState = [];

const Ewards = () => {
  const [stateModal, setOpenModal, setOptionModal] = useModal();
  const dispath = useDispatch();
  const awards = useSelector(getAwards);
  const location = useLocation();

  useEffect(() => {
    dispath(getGiftsOperation());

    location.pathname === "/awards"
      ? setOptionModal((prev) => ({ ...prev, modalName: "awards" }))
      : setOptionModal((prev) => ({ ...prev, modalName: "header" }));

    return dispath(getGiftsOperation());
  }, [location]);

  // ++++++++++++++++++++++++++++++++Logic giftsId++++++++++++++++++++++++++++++++++++++++
  const [giftIds, setGiftIdsState] = useState(initialState);

  const onToggleGetAwardsId = (awardId) => {
    setGiftIdsState((prev) => {
      return prev.includes(awardId) ? [...prev] : [...prev, awardId];
    });
  };

  const onHandleClickConfirm = () => {
    dispath(buyGiftOperation({ giftIds }));
    setOpenModal();
  };

  // ++++++++++++++++++++++++++++++++Logic giftsId+++++++++++++++++++++++++++++++++++++++++

  return (
    <EwardsStyled colors={colors}>
      <div className="ewardsProgresiveBox">
        <div className="awardsLogo">
          <svg className="ewardSvg">
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
          <EwardsModal setOpenModal={setOpenModal} />
        </Modal>
      )}
    </EwardsStyled>
  );
};

export default Ewards;
