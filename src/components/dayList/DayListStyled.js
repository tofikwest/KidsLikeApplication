import styled from "styled-components";

export const DayListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  position: absolute;
  left: -44px;
  bottom: 44px;

  width: 114px;
  height: 208px;

  background-color: #3e7adc;
  color: #ffffff;

  filter: drop-shadow(4px 6px 15px rgba(0, 0, 0, 0.1));
  border-radius: 5px;

  .dayListItem {
    font-weight: 700;
    font-size: 14px;
    line-height: 1.21;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
  }

  .dayListValue {
    margin-left: 10px;
  }
`;
