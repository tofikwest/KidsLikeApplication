import React from "react";
import catImg from "../../../images/catModal.png";

import EwardsModalStyled from "./EwardsModalStyled";
import { colors } from "../../../general/styles/colors";
import sprite from "../../../images/sprite.svg";
import { useSelector } from "react-redux";
import { getAwards } from "../../../redux/gifts/giftsSelectors";

const EwardsModal = ({ setOpenModal }) => {
  const awards = useSelector(getAwards);

  return (
    <EwardsModalStyled colors={colors}>
      <svg className="iconCloseAwards" onClick={setOpenModal}>
        <use href={sprite + "#icon-close-awards-modal"} />
      </svg>
      <img className="catImg" src={catImg} alt="cat" />
      <h3 className="awardsModalTitle">Поздравляем! Ты получаешь:</h3>

      <ul className="modalListAwards">
        {awards.map((award) => (
          <li className="modalListItemsAwards">
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

export default EwardsModal;
