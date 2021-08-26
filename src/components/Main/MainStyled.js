import styled from "styled-components";

const MainStyled = styled.main`
  padding-top: 62px;
  .loader {
    position: fixed;

    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100vw;
    height: 100vh;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export default MainStyled;
