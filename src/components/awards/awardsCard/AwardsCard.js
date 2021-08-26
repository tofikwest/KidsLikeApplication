import React from "react";
import { useDispatch } from "react-redux";
import { toggleAwardSuccess } from "../../../redux/gifts/giftsAction";
import TaskToggle from "../../taskToggle/TaskToggle";
import { CardItemStyled } from "../../cardList/card/CardStyled";

const AwardsCard = ({ award, onToggleGetAwardsId }) => {
  const dispatch = useDispatch();

  const onAwardsToggle = (awardId) => {
    dispatch(toggleAwardSuccess(awardId));
    onToggleGetAwardsId(awardId);
  };

  return (
    <CardItemStyled>
      <div className="cart">
        <img className="card__image" src={award.imageUrl} alt={award.title} />
        <div className="card__footer">
          <div className="card__info">
            <h3 className="card__taskName">{award.title}</h3>
            <span className="card__rewardTag">{award.price} баллов</span>
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
