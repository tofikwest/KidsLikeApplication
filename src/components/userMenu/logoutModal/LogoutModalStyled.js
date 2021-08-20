import styled from "styled-components";

const LogOutModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: ${({ colors }) => colors.modalTextColor};
  border-radius: 6px;
  .userModalTitle {
    margin-bottom: 10px;
  }
  .userModalBtnBox {
  }
  .userModalBtn {
    width: 100px;
    padding: 5px;
    background-color: ${({ colors }) => colors.primaryBgColor};

    border-radius: 6px;
  }
  .userModalBtn:hover,
  :focus {
    background-color: ${({ colors }) => colors.hoverBtnColor};
  }
  .userModalBtn:focus {
    background-color: ${({ colors }) => colors.hoverBtnColor};
  }
  .userModalBtn:first-child {
    margin-right: 5px;
    /* border: 2px solid green; */
  }
  /* .userModalBtn:not(:first-child) {
    border: 2px solid red;
  } */
`;

export default LogOutModalStyled;
