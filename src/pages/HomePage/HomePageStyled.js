import styled from "styled-components";

export const HomePageStyled = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
  }
  .home-sidebar {
    @media screen and (min-width: 1280px) {
      display: flex;
      min-width: 240px;
      height: 100vh;
      background-color: ${({ colors }) => colors.primaryBgColor};
    }
  }
  .right-side {
    width: 100%;
  }

  .upside-bar {
    background-color: ${({ colors }) => colors.primaryBgColor};
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-left: -20px;
    margin-right: -20px;
    margin-bottom: 40px;
  }
`;
