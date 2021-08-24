import styled from "styled-components";

export const CurrentWeekStyled = styled.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 30px;
  }

  .current-week {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 1.22;
    letter-spacing: 0.04em;
    color: ${({ colors }) => colors.primaryTextColor};
    text-align: center;

    @media screen and (min-width: 768px) {
      margin-top: 0;
      margin-bottom: 0;
    }

    @media screen and (min-width: 1280px) {
      font-size: 18px;
      margin: 0;
      text-align: left;
    }
  }
`;
