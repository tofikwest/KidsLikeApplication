import styled from "styled-components";

export const CurrentWeekRangeStyled = styled.div`
  .stats-wrapper {
    margin-bottom: 61px;
    display: flex;
    justify-content: center;

    @media screen and (min-width: 768px) {
      margin-bottom: 94px;
    }
    @media screen and (min-width: 768px) and (max-width: 1279px) {
      flex-direction: column-reverse;
      align-items: center;
    }
    @media screen and (min-width: 1280px) {
      margin-right: 50px;
      justify-content: space-between;
      padding-top: 40px;
      padding-left: 110px;
      padding-right: 50px;
    }
  }

  .current-week {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 1.22;
    letter-spacing: 0.04em;
    color: #000000;
    margin-bottom: 20px;
    margin-top: 0;

    @media screen and (max-width: 767px) {
      text-align: center;
    }
    @media screen and (min-width: 768px) and (max-width: 1279px) {
      display: none;
    }
    @media screen and (min-width: 1280px) {
      font-size: 18px;
      margin-bottom: 30px;
    }
  }
  .current-day {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.2em;
    color: #000000;
  }
  .current-tasks {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.25;
    letter-spacing: 0.04em;
    color: #a6abb9;
    margin-right: 20px;
    margin-bottom: 2px;
    @media screen and (max-width: 767px) {
      display: block;
      margin-right: 0;
      text-align: center;
    }
  }
  .stats {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.25;
    text-align: right;
    letter-spacing: 0.04em;
    color: #a6abb9;
    @media screen and (max-width: 767px) {
      display: none;
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
`;
