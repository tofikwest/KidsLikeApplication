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
import { ProgressBarMobileStyled } from "./ProgressBarMobileStyled";

const ProgressBarMobile = () => {
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
    <ProgressBarMobileStyled colors={colors}>
      <p className="mobileStats">{t("Earned points")}</p>

      <div className="mobileProgressLibrary_wrapper">
        <span className="mobileSecondPoints">
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
    </ProgressBarMobileStyled>
  );
};

export default ProgressBarMobile;
