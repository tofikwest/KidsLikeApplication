import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  buyGiftOperation,
  getGiftsOperation,
} from "../../redux/gifts/giftOperations";
import { getAwards, getAwardsError } from "../../redux/gifts/giftsSelectors";
import { getTasks } from "../../redux/tasks/tasksSelector";
import useModal from "../../hooks/useModal";
import CardList from "../cardList/CardList";
import Modal from "../Modal/Modal";
import Footer from "../footer/Footer";
import AwardsModal from "./awardsModal/AwardsModal";
import ProgressBar from "../progressBar/ProgressBar";
import AwardsError from "./awardsError/AwardsError";
import HomeMobileFooter from "../homeFooter/HomeMobileFooter";
import AddCustomTaskModal from "../planningPageTopSection/addCustomTaskModal/AddCustomTaskModal";
import { useTranslation } from "react-i18next";

import AwardsStyled from "./AwardsStyled";
import sprite from "../../images/sprite.svg";
import { colors } from "../../general/styles/colors";

const initialState = [];

const Awards = () => {
  const [giftIds, setGiftIdsState] = useState(initialState);
  const [stateModal, setOpenModal, setOpenModalTask, setOptionModal] =
    useModal();
  const dispath = useDispatch();
  const awards = useSelector(getAwards);
  const error = useSelector(getAwardsError);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    dispath(getGiftsOperation());
    location.pathname === "/awards"
      ? setOptionModal((prev) => ({ ...prev, modalName: "awards" }))
      : setOptionModal((prev) => ({ ...prev, modalName: "header" }));
  }, [location, setOptionModal, dispath]);

  // ++++++++++++++++++++++++++++++++Logic giftsId++++++++++++++++++++++++++++++++++++++++

  useEffect(() => {
    !stateModal.isModalOpen && setGiftIdsState(initialState);
  }, [stateModal]);

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
          <h3 className="awardsTitle">{t("My gifts").toUpperCase()}</h3>
        </div>
        {stateModal.width > stateModal.breakPointUserMenu && <ProgressBar />}
      </div>
      <CardList awards={awards} onToggleGetAwardsId={onToggleGetAwardsId} />

      <button className="awardsBtn" onClick={onHandleClickConfirm}>
        {t("Confirm")}
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
