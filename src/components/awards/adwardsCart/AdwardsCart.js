import React from "react";
import TaskToggle from "../../taskToggle/TaskToggle";
import { CardItemStyled } from "../../cardList/card/CardStyled";

const EdwardsCart = ({ eward, onAwardsToggle }) => {
  return (
    <CardItemStyled>
      <div className="cart">
        <img className="card__image" src={eward.imageUrl} alt={eward.title} />
        <div className="card__footer">
          <div className="card__info">
            <h3 className="card__taskName">{eward.title}</h3>
            <span className="card__rewardTag">{eward.price} баллов</span>
          </div>
          <TaskToggle
            awardId={eward.id}
            isChecked={eward.isSelected}
            onAwardsToggle={onAwardsToggle}
          />
        </div>
      </div>
    </CardItemStyled>
  );
};

export default EdwardsCart;
