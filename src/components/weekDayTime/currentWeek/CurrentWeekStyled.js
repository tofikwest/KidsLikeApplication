import styled from "styled-components";

export const CurrentWeekStyled = styled.div`
  margin-bottom: 94px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    margin-bottom: 103px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 0;
    background-color: yellow;
    flex-direction: column;
  }

  .current-week {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 1.22;
    letter-spacing: 0.04em;
    color: #000000;
    margin-bottom: 30px;
    /* margin-top: 0; */

    @media screen and (max-width: 767px) {
      text-align: center;
    }

    @media screen and (min-width: 768px) and (max-width: 1279px) {
      display: none;
    }
    @media screen and (min-width: 1280px) {
      color: red;
      font-size: 18px;
      /* margin-bottom: 30px; */
    }
  }
`;
