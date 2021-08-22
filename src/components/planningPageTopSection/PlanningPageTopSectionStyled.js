import styled from "styled-components";

export const PlanningPageTopSectionStyled = styled.div`
  padding: 20px 0px 30px;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;

    padding: 40px 0px 40px;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 48px 0px 27px;
  }
`;
