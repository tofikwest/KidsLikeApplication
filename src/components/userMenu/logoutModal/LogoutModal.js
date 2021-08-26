import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../../redux/auth/authOperations";
import useModal from "../../../hooks/useModal";
import Modal from "../../Modal/Modal";
import LogOutModalStyled from "./LogoutModalStyled";
import { colors } from "../../../general/styles/colors";
import { useTranslation } from "react-i18next";

const LogoutModal = ({ setStateUserInfo }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const signOut = () => {
    dispatch(logOut());
  };

  const [setOpenModal] = useModal();

  const goback = () => {
    setStateUserInfo((prev) => ({ ...prev, isLogout: false }));
  };

  return (
    <Modal handleCloseModal={setOpenModal}>
      <LogOutModalStyled colors={colors}>
        <span className="userModalTitle">{t("Are you sure")}</span>
        <div className="userModalBtnBox">
          <button className="userModalBtn" onClick={signOut}>
            {t("Yes")}
          </button>
          <button className="userModalBtn" onClick={goback}>
            {t("No")}
          </button>
        </div>
      </LogOutModalStyled>
    </Modal>
  );
};

export default LogoutModal;
