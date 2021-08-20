import React from "react";
import catImg from "../../../images/catModal.png";
import EwardsModalStyled from "./EwardsModalStyled";
import sprite from "../../../images/sprite.svg";

const EwardsModal = ({ setOpenModal }) => {
  return (
    <EwardsModalStyled>
      <svg className="iconCloseAwards" onClick={setOpenModal}>
        <use href={sprite + "#icon-close-awards-modal"} />
      </svg>
      <img className="catImg" src={catImg} alt="cat" />
      <h3 className="awardsModalTitle">Поздравляем! Ты получаешь:</h3>
    </EwardsModalStyled>
  );
};

export default EwardsModal;
