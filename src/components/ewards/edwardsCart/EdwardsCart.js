import React from "react";
import TaskToggle from "../../taskToggle/TaskToggle";
import { CardItemStyled } from "../../cardList/card/CardStyled";

const EdwardsCart = () => {
  return (
    <CardItemStyled>
      <div className="cart">
        <img className="card__image" src="" alt="" />
        <div className="card__footer">
          <div className="card__info">
            <h3 className="card__taskName"></h3>
            <span className="card__rewardTag"></span>
          </div>
          <TaskToggle />
        </div>
      </div>
    </CardItemStyled>
  );
};

export default EdwardsCart;
