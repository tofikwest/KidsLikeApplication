import styled from "styled-components";

export const WeekTabContentStyled = styled.div`
  @media screen and (min-width: 768px) {
    overflow-x: hidden;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
    padding-top: 40px;
    flex-direction: column;
  }
  .notification {
    font-family: inherit;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 1.25;
    text-align: center;
    letter-spacing: 0.04em;
    color: ${({ colors }) => colors.primaryTextColor};
    margin-bottom: 20px;
    margin-top: 0;
  }

  .home-button {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 220px;
    height: 48px;
    background-color: #ffbc33;
    background-color: ${({ colors }) => colors.primaryBgColor};
    border-radius: 6px;
    color: #fafafa;
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15));
    font-family: inherit;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.25;
    letter-spacing: 0.02em;
    border-color: transparent;
    margin: 0 auto;
    margin-bottom: 61px;
    cursor: pointer;

    @media screen and (min-width: 768px) {
      margin-bottom: 103px;
    }
    @media screen and (min-width: 1280px) {
      margin-bottom: 40px;
    }
  }

  .children-img {
    display: none;
    @media screen and (min-width: 280px) {
      display: block;
      width: 320px;
      height: 111px;
      margin-left: -20px;
      margin-right: -20px;
    }
    @media screen and (min-width: 768px) {
      width: 1040px;
      height: 362px;
      object-fit: cover;
      transform: translateX(-15%);
    }
    @media screen and (min-width: 1280px) {
      transform: translateX(0);
      width: 980px;
      margin-left: 0;
      margin-right: 0;
    }
  }

  .desktop-dayWeek-wrapper {
    display: flex;
    justify-content: space-between;
    padding-left: 110px;
    padding-right: 30px;
    margin-bottom: 94px;
  }
  .cards-wrapper {
    display: flex;
    justify-content: flex-end;
    margin-top: 40px;
  }
`;
