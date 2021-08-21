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
  console.log(awards);

  //   const giftIds = [1, 2];
  useEffect(() => {
    dispath(getGiftsOperation());
    // dispath(buyGiftOperation({ giftIds }));

    location.pathname === "/awards"
      ? setState((prev) => ({ ...prev, modalName: "awards" }))
      : setState((prev) => ({ ...prev, modalName: "header" }));
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

      <CardList awards={awards}></CardList>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ab
        odit vero incidunt earum? Voluptas similique, ex dolor temporibus in
        ipsa, qui quasi consequatur quod explicabo ad provident possimus laborum
        velit repellendus nemo. Quasi aliquam est, cumque harum voluptatibus
        itaque dignissimos nisi facilis nemo vitae assumenda, necessitatibus,
        dolore quidem minus?
      </p>
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
