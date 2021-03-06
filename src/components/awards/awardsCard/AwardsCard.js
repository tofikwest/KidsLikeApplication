import React from "react";
import { useDispatch } from "react-redux";
import { toggleAwardSuccess } from "../../../redux/gifts/giftsAction";
import { useTranslation } from "react-i18next";
import TaskToggle from "../../taskToggle/TaskToggle";
import { CardItemStyled } from "../../cardList/card/CardStyled";
import { colors } from "../../../general/styles/colors";
import { useLocation } from "react-router-dom";

const AwardsCard = ({ award, onToggleGetAwardsId }) => {
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  const { t } = useTranslation();

  const onAwardsToggle = (awardId) => {
    dispatch(toggleAwardSuccess(awardId));
    onToggleGetAwardsId(awardId);
  };

  return (
    <CardItemStyled location={location} color={colors}>
      <div className="cart">
        <img
          className="card__image"
          src={award.imageUrl}
          alt={t(award.title)}
        />
        <div className="card__footer">
          <div className="card__info">
            <h3 className="card__taskName">{t(award.title)}</h3>
            <span className="card__rewardTag">
              {award.price} {t("points")}
            </span>
          </div>
          <TaskToggle
            awardId={award.id}
            isChecked={award.isSelected}
            onAwardsToggle={onAwardsToggle}
          />
        </div>
      </div>
    </CardItemStyled>
  );
};

export default AwardsCard;
