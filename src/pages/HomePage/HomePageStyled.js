import styled from "styled-components";

export const HomePageStyled = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
  }
  .home-sidebar {
    @media screen and (min-width: 1280px) {
      display: flex;
      min-width: 240px;
      margin-left: -50px;
      background-color: ${({ colors }) => colors.primaryBgColor};
    }
  }
  .right-side {
    width: 100%;
    @media screen and (max-width: 767px) {
      padding-bottom: 25px;
    }
  }

  .upside-bar {
    background-color: ${({ colors }) => colors.primaryBgColor};
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-left: -94px;
    margin-right: -94px;
    margin-bottom: 40px;
    padding-right: 74px;
    padding-left: 68px;
  }
  .footer-320-stats {
    font-family: inherit;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.25;
    letter-spacing: 0.04em;
    color: #a6abb9;
    margin: 0;
    padding-top: 12px;
  }
`;
