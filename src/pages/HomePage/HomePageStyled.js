import styled from "styled-components";

export const HomePageStyled = styled.section`
  display: flex;
  /* justify-content: space-between; */

  .weekDays-list {
    list-style: none;
    margin-top: 148px;
    margin-left: 50px;
  }
  .home-sidebar {
    display: block;
    width: 240px;
    height: 100vh;
    background-color: #ffbc33;
    margin-right: 110px;
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
    /* text-align: center; */
    padding-left: 27px;
    padding-top: 12px;
  }
  .stats-wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
  }
  .current-time {
    margin-bottom: 94px;
  }

  .current-week {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 1.22;
    letter-spacing: 0.04em;
    color: #000000;
    /* margin-top: 40px; */
    margin-bottom: 30px;
  }
  .current-day {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 15px;
    letter-spacing: 0.2em;
    color: #000000;
  }
  .current-tasks {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.25;
    letter-spacing: 0.04em;
    color: #a6abb9;
  }
  .stats {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.25;
    text-align: right;
    letter-spacing: 0.04em;
    color: #a6abb9;
  }
  .home-button {
    display: block;
    width: 220px;
    height: 48px;
    background-color: #ffbc33;
    border-radius: 6px;
    color: #fafafa;
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15));
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.25;
    letter-spacing: 0.02em;
    border-color: transparent;
    margin: 0 auto;
    margin-bottom: 40px;
    /* display: flex;
    align-items: center;
    text-align: center; */
  }

  .notification {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 1.25;
    text-align: center;
    letter-spacing: 0.04em;
    color: #000000;
    margin-bottom: 20px;
  }
`;
