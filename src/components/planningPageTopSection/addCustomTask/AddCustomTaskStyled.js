import styled from "styled-components";

export const AddCustomTaskStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1280px) {
    justify-content: flex-end;
  }

  .addTaskText {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.25;
    text-align: right;
    letter-spacing: 0.04em;
    color: ${({ colors }) => colors.thirdTextColor};
  }

  .addTaskButton {
    margin-left: 20px;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
