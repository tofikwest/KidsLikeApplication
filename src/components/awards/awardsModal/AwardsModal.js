import React from "react";
import catImg from "../../../images/catModal.png";

import AwardsModalStyled from "./AwardsModalStyled";
import { colors } from "../../../general/styles/colors";
import sprite from "../../../images/sprite.svg";
import { useSelector } from "react-redux";
import { getAwards, getAwardsId } from "../../../redux/gifts/giftsSelectors";

const AwardsModal = ({ setOpenModal, giftIds }) => {
  const awards = useSelector(getAwards);
  const awardsId = useSelector(getAwardsId);

  // ++++++++++++++++++++++++++++++Filter awards selected++++++++++++++++++++++++++++++
  const modalAwards = () => {
    const res = awardsId.reduce((acc, el) => {
      if (awards.filter((award) => award.id === el)) acc.push(awards[el - 1]);
      return acc;
    }, []);
    return res;
  };

  const arrAwards = modalAwards();

  // ++++++++++++++++++++++++++++++Filter awards selected++++++++++++++++++++++++++++++

  return (
    <AwardsModalStyled colors={colors} giftIds={giftIds}>
      <svg className="iconCloseAwards" onClick={setOpenModal}>
        <use href={sprite + "#icon-close-awards-modal"} />
      </svg>
      <img className="catImg" src={catImg} alt="cat" />
      <h3 className="awardsModalTitle">Поздравляем! Ты получаешь:</h3>

      <ul className="modalListAwards">
        {arrAwards.map((award) => (
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
    </AwardsModalStyled>
  );
};

export default AwardsModal;
