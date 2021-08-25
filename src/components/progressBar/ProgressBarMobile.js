import React from "react";
import { useSelector } from "react-redux";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import { colors } from "../../general/styles/colors";
import {
  getRewardsGained,
  getRewardsPlanned,
} from "../../redux/additionalInfo/additionalInfoSelectors";
import { ProgressBarMobileStyled } from "./ProgressBarMobileStyled";

const ProgressBarMobile = () => {
  const userPoints = useSelector(getRewardsGained);
  const countPoints = useSelector(getRewardsPlanned);
  let percent = 100;
  if (countPoints) {
    percent = parseInt((userPoints / countPoints) * 100);
  }
  if (userPoints === 0) {
    percent = 0;
  }

  return (
    <ProgressBarMobileStyled colors={colors}>
      <p className="mobileStats">Заработано баллов :</p>

      <div className="mobileProgressLibrary_wrapper">
        <span className="mobileSecondPoints">
          {userPoints}/{countPoints}
        </span>
        <Progress percent={percent > 100 ? 100 : percent} />
      </div>
    </ProgressBarMobileStyled>
  );
};

export default ProgressBarMobile;
