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

  background-color: ${({ colors }) => colors.cardDayPopupWindow};
  color: ${({ colors }) => colors.modalTextColor};

  filter: drop-shadow(4px 6px 15px rgba(0, 0, 0, 0.1));
  border-radius: 5px;

  .dayListItem {
    position: relative;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.21;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
  }

  .dayListCheckbox {
    cursor: pointer;
  }

  .dayListCheckboxIcon {
    pointer-events: none;
  }

  .dayListValue {
    display: flex;
    justify-content: space-around;

    text-transform: capitalize;
    width: 50px;
    cursor: pointer;
  }
`;
