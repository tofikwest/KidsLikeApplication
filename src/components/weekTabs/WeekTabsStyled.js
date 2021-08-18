import styled from "styled-components";

export const WeekTabsStyled = styled.div`
  .weekDays-list {
    list-style: none;
    margin-top: 148px;
    margin-left: 50px;
  }
  .weekDays-listItem {
    width: 190px;
    height: 42px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 6px 0px 0px 6px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 1.21;
    letter-spacing: 0.04em;
    color: #000000;
    margin-bottom: 6px;
    padding-left: 27px;
    text-align: left;
    border-color: transparent;
    cursor: pointer;
  }
  .weekDays-active {
    background-color: #ffffff;
  }
`;
