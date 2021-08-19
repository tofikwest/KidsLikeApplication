import styled from "styled-components";

export const CurrentDayStyled = styled.div`
  margin-bottom: 94px;
  .current-week {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 1.22;
    letter-spacing: 0.04em;
    color: #000000;
    margin-bottom: 30px;

    @media screen and (max-width: 767px) {
      text-align: center;
    }
    @media screen and (min-width: 1280px) {
      font-size: 18px;
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
    @media screen and (max-width: 767px) {
      display: block;
      margin-right: 0;
      text-align: center;
    }
  }
`;
