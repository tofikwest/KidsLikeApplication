import styled from "styled-components";

export const WeekTabsStyled = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    max-width: 376px;
    height: 70px;
  }

  @media screen and (min-width: 1280px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 50px;
    margin-top: 90px;
  }

  .weekDays-listItem {
    font-family: inherit;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 1.25;
    letter-spacing: 0.04em;
    color: ${({ colors }) => colors.primaryTextColor};
    text-align: center;
    border-color: transparent;
    cursor: pointer;
    border-radius: 4px;
    width: 35px;
    height: 24px;
    margin-right: 4px;
    background-color: rgba(255, 188, 51, 0.5);

    @media screen and (min-width: 768px) {
      width: 40px;
      height: 26px;
      margin-right: 16px;
      background-color: rgba(255, 255, 255, 0.5);
    }

    @media screen and (min-width: 1280px) {
      text-align: left;
      margin: 0;
      padding: 0;
      min-width: 190px;
      min-height: 40px;
      border-radius: 6px 0px 0px 6px;
      margin-bottom: 6px;
      font-size: 14px;
      line-height: 1.21;
      padding-left: 27px;
    }
  }

  .weekDays-listItem:last-child {
    margin-right: 0;
    @media screen and (min-width: 1280px) {
      margin-bottom: 0;
    }
  }

  .weekDays-active {
    background-color: ${({ colors }) => colors.primaryBgColor};
    @media screen and (min-width: 768px) {
      background-color: #ffffff;
    }
  }
`;
