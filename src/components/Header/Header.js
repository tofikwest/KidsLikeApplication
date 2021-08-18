import React, { useEffect, useState } from "react";
import Navigation from "../Navigations/Navigation";
import Modal from "../Modal/Modal";
import Logo from "../Logo/Logo";
import BalanceCounter from "../BalanceCounter/BalanceCounter";

import { colors } from "../../general/styles/colors";
import HeaderStyled from "./HeaderStyled";
// import sprite from "../../images/sprite.svg";
import menuSvg from "../../images/menu-2.svg";

import { useLocation } from "react-router";

const initialState = {
  width: window.innerWidth,
  breakPoint: 768,
  isModalOpen: false,
};

const Header = () => {
  const [state, setState] = useState(initialState);
  const location = useLocation();

  // console.log(location);

  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);
    location && closeModalOnLocation();
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, [location]);

  const closeModalOnLocation = () => {
    setState((prev) => ({ ...prev, isModalOpen: false }));
  };

  const handleResizeWindow = () => {
    setState((prev) => ({ ...prev, width: window.innerWidth }));
  };

  const setOpenModal = () => {
    setState((prev) => ({ ...prev, isModalOpen: !prev.isModalOpen }));
  };

  return (
    <>
      <HeaderStyled colors={colors}>
        <Logo />
        <BalanceCounter />
        {state.width > state.breakPoint ? (
          <Navigation />
        ) : (
          <img className="menuNavImg" onClick={setOpenModal} src={menuSvg} />
          // <svg className="menuNavImg" onClick={setOpenModal}>
          //   <use href={sprite + "#icon-logo"} />
          // </svg>
        )}
      </HeaderStyled>
      {state.isModalOpen && (
        <Modal handleCloseModal={setOpenModal}>
          <Navigation />
        </Modal>
      )}
    </>
  );
};

export default Header;
