import styled from "styled-components";

export const CurrentDayStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 61px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    margin-bottom: 103px;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: column;
    margin-bottom: 0;
    width: 350px;
  }
  .current-day {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.2em;
    color: ${({ colors }) => colors.primaryTextColor};
    text-align: center;
    @media screen and (min-width: 1280px) {
      display: inline-flex;
    }
  }
  .current-tasks {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.25;
    letter-spacing: 0.04em;
    color: ${({ colors }) => colors.thirdTextColor};
    text-align: center;

    margin-bottom: 2px;
    @media screen and (min-width: 768px) {
      margin-bottom: 0;
      margin-right: 20px;
    }
    @media screen and (min-width: 1280px) {
      display: inline-flex;
    }
  }
`;
