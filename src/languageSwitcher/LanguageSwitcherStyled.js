import styled from "styled-components";
export const LanguageSwitcherStyled = styled.div`
  .wrapper {
    width: 100px;
    height: 100px;
    background-color: #ffb532;
  }
  .langBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    padding: 8px;
    font-size: 13px;
    font-weight: bold;
    line-height: 17px;
    text-align: center;
    color: #fff;
    background-color: #ffb532;
    border: none;
    border-radius: 50%;
    cursor: pointer;
  }
  .langBtn:hover,
  .langBtn:focus {
    background-color: #ec9334;
  }
  @media (min-width: 767px) {
    .langBtn {
      position: absolute;
      transform: translate(-58px, -16px);
    }
  }
  @media (min-width: 1279px) {
    .langBtn {
      position: absolute;
      transform: translate(550px, -16px);
    }
  }
`;
