import styled from "styled-components";

export const ProgresiveBarStyled = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .stats-wrapper {
    margin-bottom: 61px;
    display: flex;
    justify-content: center;

    @media screen and (min-width: 768px) and (max-width: 1279px) {
      flex-direction: column-reverse;
      align-items: center;
      margin-bottom: 0;
    }
    @media screen and (min-width: 1280px) {
      flex-direction: column;
      margin-right: 50px;
      justify-content: space-between;
      padding-top: 40px;
      /* padding-left: 110px;
      padding-right: 50px; */
      margin-bottom: 0;
    }
  }
  .stats {
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.25;
    text-align: right;
    letter-spacing: 0.04em;
    color: #a6abb9;
    @media screen and (max-width: 767px) {
      display: none;
    }
    @media screen and (min-width: 768px) {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
  .stats1 {
    @media screen and (min-width: 768px) {
      margin-top: 10px;
    }
    @media screen and (min-width: 1280px) {
      margin-bottom: 10px;
    }
  }
  .stats-number {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 1.25;
    text-align: right;
    letter-spacing: 0.2em;
    color: #000000;
    margin-left: 13px;
  }
  .progressLibrary_wrapper {
    display: flex;
    /* justify-content: space-between; */
    margin-top: 10px;
    @media screen and (min-width: 768px) {
      width: 350px;
      margin-bottom: 20px;
    }
  }

  .secondPoints {
    font-weight: bold;
    margin-right: 26px;
  }
`;
