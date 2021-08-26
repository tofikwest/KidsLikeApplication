import styled from "styled-components";

const ModalStyled = styled.div`
  position: fixed;
  padding-top: ${({ modalName }) => modalName === "awards" && "140px"};
  padding-bottom: ${({ modalName }) => (modalName === "header" ? "0" : "20px")};
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: ${({ modalName }) =>
    modalName === "header" ? "flex-end" : "center"};
  align-items: ${({ modalName }) => modalName !== "header" && "center"};
  background-color: ${({ colors }) => colors.modalBackdropBackground};

  z-index: 10000;

  overflow-y: scroll;

  .modal {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: ${({ modalName }) =>
      modalName === "header" ? "flex-start" : "center"};
    padding-top: ${({ modalName }) => (modalName === "header" ? "80px" : "0")};
    width: ${({ modalName }) => (modalName === "header" ? "274px" : "auto")};
    background-color: ${({ modalName, colors }) =>
      modalName === "header" ? colors.primaryBgColor : "none"};
    box-shadow: ${({ modalName, colors }) =>
      modalName === "header"
        ? `-15px 0px 20px ${colors.modalBoxShadowColor}`
        : `15px 15px 20px ${colors.modalBoxShadowColor}`};
    border-radius: ${({ modalName }) => modalName !== "header" && "6px"};
  }

  .btnModalCloseSvg {
    position: absolute;
    top: 25px;
    right: 20px;
    width: 14px;
    height: 14px;
  }

  @media screen and (min-width: 768px) {
    padding-top: ${({ modalName }) => modalName === "awards" && "0"};
  }
`;

export default ModalStyled;
