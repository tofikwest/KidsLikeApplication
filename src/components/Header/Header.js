import { useSelector } from "react-redux";
import { authorizedUser } from "../../redux/auth/authSelectors";
import Navigation from "../Navigations/Navigation";
import Modal from "../Modal/Modal";
import Logo from "../Logo/Logo";
import BalanceCounter from "../BalanceCounter/BalanceCounter";
import UserMenu from "../userMenu/UserMenu";
import useModal from "../../hooks/useModal";

import { colors } from "../../general/styles/colors";
import sprite from "../../images/sprite.svg";
import HeaderStyled from "./HeaderStyled";

const Header = () => {
  const [state, setOpenModal] = useModal();

  const isAuth = useSelector(authorizedUser);

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
