import styled from "styled-components";

export const HomePageStyled = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
  }
  .home-sidebar {
    @media screen and (min-width: 1280px) {
      display: flex;
      display: block;
      min-width: 240px;
      height: 100vh;
      background-color: #ffbc33;
    }
  }
  .right-side {
    width: 100%;
  }

  .upside-bar {
    background-color: #ffbc33;
    height: 70px;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    padding-left: 74px;
    padding-right: 78px;
  }
  .upside-bar--current-week {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 1.22;
    letter-spacing: 0.04em;
    color: #000000;
    margin-bottom: 0;
    margin-top: 0;
    width: 172px;
    /* margin-right: 28px; */
  }
`;
