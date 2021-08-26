import styled from "styled-components";

export const HomeMobileFooterStyled = styled.div`
  /* position: fixed; */
  bottom: 0;
  left: 0;
  width: 100vw;
  background-color: #f1f1f1;
  margin-left: -20px;

  .homeMobileFooterWrapper {
    position: relative;
    display: flex;
    justify-content: center;
    height: 58px;
    max-width: 280px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
  }

  .addTaskButton {
    position: absolute;
    top: -13px;
    right: 0;
    margin-left: 20px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
