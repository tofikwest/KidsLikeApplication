import React from "react";
import TaskToggle from "../../taskToggle/TaskToggle";
import { CardItemStyled } from "../../cardList/card/CardStyled";

const EdwardsCart = ({ eward }) => {
  function declOfNum(n, text) {
    n = Math.abs(n) % 100;
    const n1 = n % 10;
    if (n > 10 && n < 20) {
      return text[2];
    }
    if (n1 > 1 && n1 < 5) {
      return text[1];
    }
    if (n1 === 1) {
      return text[0];
    }
    return text[2];
  }
  //   console.log(price);
  return (
    <CardItemStyled>
      <div className="cart">
        <img className="card__image" src={eward.imageUrl} alt={eward.title} />
        <div className="card__footer">
          <div className="card__info">
            <h3 className="card__taskName">{eward.title}</h3>
            <span className="card__rewardTag">{`${eward.price} ${declOfNum(
              eward.price,
              ["балл", "балла", "баллов"]
            )}`}</span>
          </div>
          <TaskToggle />
        </div>
      </div>
    </CardItemStyled>
  );
};

export default EdwardsCart;
