import styled from "styled-components";

export const ProgressBarStyled = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  @media screen and (min-width: 1280px) {
    max-width: 360px;
    align-items: flex-end;
  }
  .stats-wrapper {
    margin-bottom: 61px;
    display: flex;
    justify-content: center;

    @media screen and (min-width: 768px) and (max-width: 1279px) {
      flex-direction: column-reverse;
      align-items: center;
      margin-bottom: 0;
    }
    @media screen and (min-width: 1280px) {
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 0;
    }
  }
  .stats {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.25;
    text-align: right;
    letter-spacing: 0.04em;
    color: ${({ colors }) => colors.thirdTextColor};
    @media screen and (max-width: 767px) {
      display: none;
    }
    @media screen and (min-width: 768px) {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
  .stats1 {
    @media screen and (min-width: 768px) {
      margin-top: 10px;
    }
    @media screen and (min-width: 1280px) {
      margin-top: 0;
      margin-bottom: 10px;
    }
  }
  .stats-number {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 1.25;
    text-align: right;
    letter-spacing: 0.2em;
    color: #000000;
    margin-left: 13px;
  }
  .progressLibrary_wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    @media screen and (min-width: 768px) {
      width: 350px;
      margin-bottom: 20px;
    }
    @media screen and (min-width: 1280px) {
      margin-bottom: 0;
    }
  }
  .secondPoints {
    font-weight: bold;
  }
  .react-sweet-progress-symbol {
    display: none;
  }
  .react-sweet-progress {
    width: 280px;
  }
`;
