import styled from "styled-components";

export const DateDropdownStyled = styled.div`
  position: relative;
  box-shadow: 4px 4px 6px 2px rgba(0, 0, 0, 0.15);

  @media screen and (min-width: 768px) {
    margin-left: 10px;
    width: 168px;
  }

  .arrowIcon {
    position: absolute;
    top: 50%;
    right: 10px;
  }

  .react-select__value-container {
    padding: 0px 8px 0px 0px;
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__indicator {
    padding: 8px 0px;
  }

  .react-select__control {
    border-color: ${({ colors }) => colors.primaryBgColor};
    box-shadow: none;
  }

  .react-select__control::selection {
    display: none;
    box-shadow: none;
  }

  .react-select__control--is-focused {
    border-color: ${({ colors }) => colors.primaryBgColor};
    box-shadow: none;
  }

  .react-select__single-value {
    margin-left: 10px;
    text-transform: capitalize;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.25;
    letter-spacing: 0.2em;
    color: ${({ colors }) => colors.primaryTextColor};
    padding: 6px 9px 5px 0px;
    border-color: ${({ colors }) => colors.primaryBgColor};
    border-radius: 4px;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    @media screen and (min-width: 768px) {
      margin-top: 0;
      margin-bottom: 30px;
    }
  }

  .react-select__option {
    text-transform: capitalize;
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.25;
    display: flex;
    align-items: center;
    letter-spacing: 0.2em;
    color: ${({ colors }) => colors.primaryTextColor};
  }

  .react-select__placeholder {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.25;
    letter-spacing: 0em;
    color: ${({ colors }) => colors.primaryTextColor};
  }

  .react-select__menu {
    border: 1px solid ${({ colors }) => colors.primaryBgColor};

    border-radius: 4px;
  }

  .react-select__option--is-selected {
    background-color: ${({ colors }) => colors.primaryBgColor};
  }
`;
