import styled from "styled-components";

const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  background-color: ${({ colors }) => colors.modalBackdropBackground};
  z-index: 1200;
  overflow: auto;
  .modal {
    width: 274px;
    background-color: ${({ colors }) => colors.primaryBgColor};
  }
`;

export default ModalStyled;
