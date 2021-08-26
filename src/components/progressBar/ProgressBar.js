import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import { colors } from "../../general/styles/colors";
import {
  getRewardsGained,
  getRewardsPlanned,
} from "../../redux/additionalInfo/additionalInfoSelectors";
import { ProgressBarStyled } from "./ProgressBarStyled";

const ProgressBar = () => {
  const { t } = useTranslation();

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
    <ProgressBarStyled colors={colors}>
      <div className="stats-wrapper">
        <p className="stats stats1">
          {t("Earned points this week")}
          <span className="stats-number">{userPoints}</span>
        </p>

        <p className="stats">
          {t("Total points this week")}
          <span className="stats-number">{countPoints}</span>
        </p>
      </div>

      <div className="progressLibrary_wrapper">
        <span className="secondPoints">
          {userPoints}/{countPoints}
        </span>
        <Progress
          percent={percent > 100 ? 100 : percent}
          theme={{
            success: {
              color: "rgb(223, 105, 180)",
            },
            active: {
              color: "#9ECB44",
              trailColor: "#E0E0E0",
            },
            default: {
              trailColor: "#E0E0E0",
            },
          }}
        />
      </div>
    </ProgressBarStyled>
  );
};

export default ProgressBar;
