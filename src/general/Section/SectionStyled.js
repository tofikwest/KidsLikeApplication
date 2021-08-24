import styled from "styled-components";

export const SectionStyled = styled.section`
  max-width: 320px;
  margin: 0 auto;
  margin-right: 0;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 768px) {
    max-width: 768px;

    padding-left: 74px;
    padding-right: 74px;
    overflow-x: hidden;
    margin-left: 0;

  }
  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding-left: 0;
    padding-right: 0;
  }
`;
