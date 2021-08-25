import styled from "styled-components";

export const ProgressBarMobileStyled = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 1000;
  background-color: #f1f1f1;

  .mobileStats {
    font-family: inherit;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.25;
    letter-spacing: 0.04em;
    text-align: left;
    color: ${({ colors }) => colors.thirdTextColor};
    margin-top: 0;
    margin-bottom: 2px;
  }

  .mobileProgressLibrary_wrapper {
    display: flex;
    justify-content: space-between;
    padding-bottom: 12px;
  }
  .mobileSecondPoints {
    font-weight: bold;
  }
  .react-sweet-progress-symbol {
    display: none;
  }
  .react-sweet-progress {
    width: 150px;
    margin-left: 19px;
  }
`;
