import React from "react";
import { useSelector } from "react-redux";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import {
  getRewardsGained,
  getRewardsPlanned,
} from "../../redux/additionalInfo/additionalInfoSelectors";
import { ProgresiveBarStyled } from "./ProgresiveBarStyled";

const ProgresiveBar = () => {
  // const userPoints = useSelector(getRewardsGained);
  // const countPoints = useSelector(getRewardsPlanned);
  let percent = 100;
  let userPoints = 4;
  let countPoints = 16;
  if (countPoints) {
    percent = parseInt((userPoints / countPoints) * 100);
  }
  if (userPoints === 0) {
    percent = 0;
  }

  return (
    <ProgresiveBarStyled>
      <div className="stats-wrapper">
        <p className="stats stats1">
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
        <Progress percent={percent} />
      </div>
    </ProgresiveBarStyled>
  );
};

export default ProgresiveBar;
