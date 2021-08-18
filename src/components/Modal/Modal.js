import React from "react";
import { useEffect } from "react";
import sprite from "../../images/sprite.svg";
import { colors } from "../../general/styles/colors";
import ModalStyled from "./ModalStyled";

const Modal = ({ children, handleCloseModal, modalName }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleEsc);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleEsc);
      const body = document.querySelector("body");
      body.style.overflow = "auto";
    };
  });

  const handleEsc = (e) => e.code === "Escape" && handleCloseModal();

  const handleClick = (e) => e.target === e.currentTarget && handleCloseModal();

  const onBtnClose = () => handleCloseModal();

  return (
    <ModalStyled onClick={handleClick} colors={colors} modalName={modalName}>
      <div className="modal">
        {/* <button className="btnModalClose"> */}
        <svg className="btnModalCloseSvg" onClick={onBtnClose}>
          <use href={sprite + "#icon-close"} />
        </svg>
        {/* </button> */}
        {children}
      </div>
    </ModalStyled>
  );
};

export default Modal;
