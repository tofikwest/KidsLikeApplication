import styled from "styled-components";

export const MobileTaskFooterStyled = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  background-color: ${({ colors }) => colors.footerHomeMobileBgColor};

  .mobileFooterWrapper {
    position: relative;
    display: flex;
    justify-content: center;
    height: 58px;
    max-width: 280px;
    margin-left: auto;
    margin-right: auto;
  }

  .amountText {
    display: flex;
    align-items: center;

    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.25;
    letter-spacing: 0.04em;
    text-transform: uppercase;

    color: ${({ colors }) => colors.thirdTextColor};
  }

  .plannedRewardPoints {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 30px;
    height: 30px;
    background-color: ${({ colors }) => colors.rewardAmountCircleColor};
    border-radius: 50%;
    margin-right: 10px;
    color: ${({ colors }) => colors.modalTextColor};
  }

  .addTaskButton {
    position: absolute;
    top: -13px;
    right: 0;
    margin-left: 20px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
