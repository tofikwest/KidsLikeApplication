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
import LanguageSwitcher from "../languageSwitcher/LanguageSwitcher";

const Header = () => {
  const [stateModal, setOpenModal] = useModal();

  const isAuth = useSelector(authorizedUser);

  return (
    <>
      <HeaderStyled colors={colors}>
        {/* <LanguageSwitcher /> */}
        <Logo />
        <BalanceCounter />

        {stateModal.width > stateModal.breakPointNavigation ? (
          <Navigation />
        ) : (
          <svg className="menuNavImg" onClick={setOpenModal}>
            <use href={sprite + "#icon-menu"} />
          </svg>
        )}
        {isAuth && stateModal.width > stateModal.breakPointUserMenu && (
          <UserMenu />
        )}
      </HeaderStyled>

      {stateModal.isModalOpen && (
        <Modal handleCloseModal={setOpenModal} modalName={stateModal.modalName}>
          {isAuth && stateModal.width < stateModal.breakPointUserMenu && (
            <UserMenu />
          )}
          <Navigation />
        </Modal>
      )}
    </>
  );
};

export default Header;
