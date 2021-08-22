import React, { useEffect } from "react";
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
import EwardsModal from "./ewardsModal/EwardsModal";
import ProgresiveBar from "../progresiveBar/ProgresiveBar";

import EwardsStyled from "./EwardsStyled";
import sprite from "../../images/sprite.svg";
import { colors } from "../../general/styles/colors";

const Ewards = () => {
  const [state, setOpenModal, setState] = useModal();
  const dispath = useDispatch();
  const awards = useSelector(getAwards);
  const location = useLocation();
  //   console.log(awards);
  //   const giftIds = [1, 2];
  useEffect(() => {
    dispath(getGiftsOperation());
    location.pathname === "/awards"
      ? setState((prev) => ({ ...prev, modalName: "awards" }))
      : setState((prev) => ({ ...prev, modalName: "header" }));
    // dispath(buyGiftOperation({ giftIds }));
    return dispath(getGiftsOperation());
  }, [location]);

  //   console.log(location);
  //   console.log(state.modalName);

  return (
    <EwardsStyled colors={colors}>
      <div className="ewardsProgresiveBox">
        <div className="awardsLogo">
          <svg className="ewardSvg">
            <use href={sprite + "#icon-award"} />
          </svg>
          <h3 className="awardsTitle">Мои призы</h3>
        </div>
        {state.width > state.breakPointUserMenu && <ProgresiveBar />}
      </div>

      <CardList awards={awards} />

      <button className="awardsBtn" onClick={setOpenModal}>
        Подтвердить
      </button>
      <Footer />
      {state.width < state.breakPointUserMenu && <ProgresiveBar />}
      {state.isModalOpen && (
        <Modal handleCloseModal={setOpenModal} modalName={state.modalName}>
          <EwardsModal setOpenModal={setOpenModal} />
        </Modal>
      )}
    </EwardsStyled>
  );
};

export default Ewards;
