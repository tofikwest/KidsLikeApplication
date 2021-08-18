import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import Navigation from "../Navigations/Navigation";
import Modal from "../Modal/Modal";
import Logo from "../Logo/Logo";
import BalanceCounter from "../BalanceCounter/BalanceCounter";
import UserMenu from "../userMenu/UserMenu";

import HeaderStyled from "./HeaderStyled";
import { colors } from "../../general/styles/colors";
import sprite from "../../images/sprite.svg";

// import useHeaderModal from "../../hooks/useHeaderModal";
// const [state, setOpenModal] = useHeaderModal();

const initialState = {
  width: window.innerWidth,
  breakPointNavigation: 1279,
  breakPointUserMenu: 767,
  isModalOpen: false,
  modalName: "header",
};

const Header = () => {
  const [state, setState] = useState(initialState);
  const location = useLocation();

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
        {state.width > state.breakPointNavigation ? (
          <Navigation />
        ) : (
          <svg className="menuNavImg" onClick={setOpenModal}>
            <use href={sprite + "#icon-menu"} />
          </svg>
        )}
        {state.width > state.breakPointUserMenu && <UserMenu />}
      </HeaderStyled>
      {state.isModalOpen && (
        <Modal handleCloseModal={setOpenModal} modalName={state.modalName}>
          {state.width < state.breakPointUserMenu && <UserMenu />}
          <Navigation />
        </Modal>
      )}
    </>
  );
};

export default Header;
