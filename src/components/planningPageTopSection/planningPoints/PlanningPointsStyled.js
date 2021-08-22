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
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.22;
    letter-spacing: 0.04em;
    color: #000000;
    text-align: center;

    @media screen and (min-width: 768px) {
      text-align: start;
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

  .weekPlansDaySelector {
    margin-top: 10px;

    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.25;
    letter-spacing: 0.2em;
    color: #000000;
    padding: 6px 9px 5px 8px;
    border-color: #ffbc33;
    border-radius: 4px;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    @media screen and (min-width: 768px) {
      margin-top: 0;
      margin-left: 10px;
      margin-bottom: 30px;
    }
  }

  .weekPlansDay {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 12px;
    line-height: 1.25;
    display: flex;
    align-items: center;
    letter-spacing: 0.2em;
    color: #000000;
  }
`;
