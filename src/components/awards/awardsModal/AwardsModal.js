import React from "react";
import catImg from "../../../images/catModal.png";

import EwardsModalStyled from "./AwardsModalStyled";
import { colors } from "../../../general/styles/colors";
import sprite from "../../../images/sprite.svg";
import { useSelector } from "react-redux";
import { getAwards, getAwardsId } from "../../../redux/gifts/giftsSelectors";

const AwardsModal = ({ setOpenModal }) => {
  const awards = useSelector(getAwards);
  const awardsId = useSelector(getAwardsId);

  // ++++++++++++++++++++++++++++++Filter awards selected++++++++++++++++++++++++++++++
  const modalAwards = awards.filter(
    (award, index) => award.id === awardsId[index]
  );
  // ++++++++++++++++++++++++++++++Filter awards selected++++++++++++++++++++++++++++++

  return (
    <EwardsModalStyled colors={colors}>
      <svg className="iconCloseAwards" onClick={setOpenModal}>
        <use href={sprite + "#icon-close-awards-modal"} />
      </svg>
      <img className="catImg" src={catImg} alt="cat" />
      <h3 className="awardsModalTitle">Поздравляем! Ты получаешь:</h3>

      <ul className="modalListAwards">
        {modalAwards.map((award) => (
          <li className="modalListItemsAwards" key={award.id}>
            <img
              className="modalListItemsImageAwards"
              src={award.imageUrl}
              alt={award.title}
            />
            <h4 className="modalListItemsTitleAwards">{award.title}</h4>
          </li>
        ))}
      </ul>
    </EwardsModalStyled>
  );
};

export default AwardsModal;
