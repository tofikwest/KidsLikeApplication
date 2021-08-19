import styled from "styled-components";

export const ProgresiveBarStyled = styled.div`
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
  }
  .info {
    width: 100%;
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
    justify-content: space-between;
    margin-top: 10px;
  }

  .secondPoints {
    font-weight: bold;
    margin-right: 26px;
  }
`;
