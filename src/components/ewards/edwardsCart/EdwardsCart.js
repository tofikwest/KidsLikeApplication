import React, { useState } from "react";
import { useDispatch } from "react-redux";
import TaskToggle from "../../taskToggle/TaskToggle";
import { CardItemStyled } from "../../cardList/card/CardStyled";
import { buyGiftOperation } from "../../../redux/gifts/giftOperations";

const initialState = { ewardsId: [] };

const EdwardsCart = ({ eward }) => {
  const [state, setState] = useState(initialState);
  const dispath = useDispatch();

  //   console.log(state);

  //   const giftIds = [1, 2, 3];
  const onAwardsToggle = (ewardId) => {
    // dispath(buyGiftOperation());
    setState((prev) => ({
      ...prev,
      ewardsId: [...prev.ewardsId, ewardId],
    }));

    // console.log(ewardId);
  };
  //   console.log(ewar d);

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
