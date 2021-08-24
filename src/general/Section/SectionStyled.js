import styled from "styled-components";

export const SectionStyled = styled.section`
  max-width: 320px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media screen and (min-width: 1280px) {
    max-width: 1240px;
  }
`;
