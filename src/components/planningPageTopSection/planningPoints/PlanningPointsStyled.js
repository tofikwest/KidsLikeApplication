import styled from "styled-components";

export const PlanningPointsStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    /* justify-content: space-between; */
  }

  .weekPlansText {
    margin: 0;
    margin-bottom: 30px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.22;
    letter-spacing: 0.04em;
    color: #000000;
    text-align: center;

    @media screen and (min-width: 768px) {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    @media screen and (min-width: 1280px) {
      margin-bottom: 0;
    }
  }

  .weekPlansDate {
    font-family: "Montserrat", sans-serif;
    margin-left: 10px;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.25;
    letter-spacing: 0.2em;
    color: #000000;
  }

  .totalWeekPlans {
    display: flex;
    align-items: center;
    margin-top: 0;

    font-family: "Montserrat", sans-serif;

    font-weight: 500;
    font-size: 12px;
    line-height: 1.25;
    letter-spacing: 0.04em;
    color: #a6abb9;

    @media screen and (min-width: 768px) {
      margin-bottom: 10px;
    }

    @media screen and (min-width: 1280px) {
      margin-bottom: 0;

      margin-left: 100px;
    }
  }

  .totalWeekPlansNumber {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 30px;
    height: 30px;
    background-color: #8ec63f;
    border-radius: 50%;
    margin: 0 5px;

    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.21;
    letter-spacing: 0.04em;
    color: #ffffff;
  }
`;
