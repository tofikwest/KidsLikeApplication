import styled from "styled-components";

export const CurrentDayStyled = styled.div`
  margin-bottom: 94px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    margin-bottom: 103px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 0;
    background-color: yellow;
    flex-direction: column;
  }

  .current-day {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.2em;
    color: #000000;
    @media screen and (max-width: 767px) {
      display: block;
      text-align: center;
    }
    @media screen and (min-width: 768px) {
      display: inline-block;
    }
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
`;
