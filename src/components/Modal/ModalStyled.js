import styled from "styled-components";

const ModalStyled = styled.div`
  position: fixed;
  padding-top: ${({ modalName }) => modalName === "awards" && "140px"};
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

  .modal {
    position: relative;
    padding-top: ${({ modalName }) => (modalName === "header" ? "80px" : "0")};
    width: ${({ modalName }) => (modalName === "header" ? "274px" : "auto")};
    background-color: ${({ modalName, colors }) =>
      modalName === "header" ? colors.primaryBgColor : colors.modalTextColor};
    box-shadow: ${({ modalName, colors }) =>
      modalName === "header"
        ? `-15px 0px 20px ${colors.modalBoxShadowColor}`
        : `15px 15px 20px ${colors.modalBoxShadowColor}`};
    border-radius: ${({ modalName }) => modalName !== "header" && "6px"};
  }

  .btnModalCloseSvg {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 20px;
    height: 20px;
  }

  @media screen and (min-width: 768px) {
    padding-top: ${({ modalName }) => modalName === "awards" && "0"};
  }
`;

export default ModalStyled;
