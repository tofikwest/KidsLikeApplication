import styled from "styled-components";

const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: ${({ modalName }) =>
    modalName === "header" ? "flex-end" : "center"};
  /* z-index: 10000; */
  /* overflow: auto; */

  background-color: ${({ colors }) => colors.modalBackdropBackground};
  .modal {
    padding-top: 80px;
    position: relative;
    width: ${({ modalName }) => (modalName === "header" ? "274px" : "auto")};
    background-color: ${({ colors }) => colors.primaryBgColor};
    box-shadow: -15px 0px 20px ${({ colors }) => colors.modalBoxShadowColor};
  }

  /* .btnModalClose {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: transparent;
    border: none;
  } */
  .btnModalCloseSvg {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 20px;
    height: 20px;
    fill: #ffffff;
  }
`;

export default ModalStyled;
