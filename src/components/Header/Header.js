// import { useSelector } from "react-redux";
import Navigation from "../Navigations/Navigation";
import Modal from "../Modal/Modal";
import Logo from "../Logo/Logo";
import BalanceCounter from "../BalanceCounter/BalanceCounter";
import UserMenu from "../userMenu/UserMenu";

import HeaderStyled from "./HeaderStyled";
import { colors } from "../../general/styles/colors";
import sprite from "../../images/sprite.svg";

import useHeaderModal from "../../hooks/useModal";
import { useSelector } from "react-redux";

const Header = () => {
  const [state, setOpenModal] = useHeaderModal();

  const isAuth = useSelector((state) => state.auth.isAuthenticated);

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
        {isAuth && state.width > state.breakPointUserMenu && <UserMenu />}
      </HeaderStyled>

      {state.isModalOpen && (
        <Modal handleCloseModal={setOpenModal} modalName={state.modalName}>
          {isAuth && state.width < state.breakPointUserMenu && <UserMenu />}
          <Navigation />
        </Modal>
      )}
    </>
  );
};

export default Header;
