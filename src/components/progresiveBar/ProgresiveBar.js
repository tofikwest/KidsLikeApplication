import React from "react";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import { ProgresiveBarStyled } from "./ProgresiveBarStyled";

const ProgresiveBar = () => {
  let percent = 100;
  let userPoints = 4;
  let countPoints = 16;
  if (countPoints) {
    percent = parseFloat((userPoints / countPoints) * 100);
  }
  if (userPoints === 0) {
    percent = 0;
  }

  return (
    <ProgresiveBarStyled>
      <div className="info">
        <p className="stats">
          Заработано баллов за эту неделю:
          <span className="stats-number">{userPoints}</span>
        </p>

        <p className="stats">
          Запланировано баллов на эту неделю:
          <span className="stats-number">{countPoints}</span>
        </p>
      </div>

      <div className="progressLibrary_wrapper">
        <span className="secondPoints">
          {userPoints}/{countPoints}
        </span>
        <Progress percent={percent > 100 ? 100 : percent} />
      </div>
    </ProgresiveBarStyled>
  );
};

export default ProgresiveBar;
