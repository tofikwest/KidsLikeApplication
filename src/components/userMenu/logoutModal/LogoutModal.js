import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { logOut } from "../../../redux/auth/authOperations";
import useModal from "../../../hooks/useModal";
import Modal from "../../Modal/Modal";
import LogOutModalStyled from "./LogoutModalStyled";
import { colors } from "../../../general/styles/colors";
const LogoutModal = ({ setStateUserInfo }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const signOut = () => {
    dispatch(logOut());
    history.push("auth");
  };

  //   const location = useLocation();

  const [state, setOpenModal, closeModalOnLocation] = useModal();

  //   console.log(closeModalOnLocation, setOpenModal);
  //   const onClickddd = (e) => {
  //     console.log(e);
  //     console.log(setOpenModal);
  //   };

  const goback = () => {
    setStateUserInfo((prev) => ({ ...prev, isLogout: false }));
  };

  return (
    <Modal handleCloseModal={setOpenModal}>
      <LogOutModalStyled colors={colors}>
        <span className="userModalTitle">Ты уверен ?</span>
        <div className="userModalBtnBox">
          <button className="userModalBtn" onClick={signOut}>
            Да
          </button>
          <button className="userModalBtn" onClick={goback}>
            Нет
          </button>
        </div>
      </LogOutModalStyled>
    </Modal>
  );
};

export default LogoutModal;
