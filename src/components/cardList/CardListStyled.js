import styled from "styled-components";

export const CardListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;

  margin-left: auto;
  margin-right: auto;

  width: 280px; //temporary fixed width
  margin-top: -20px;

  @media screen and (min-width: 768px) {
    width: 600px; //temporary fixed width
    margin-top: -30px;
    margin-left: -20px;
  }

  @media screen and (min-width: 1280px) {
    width: 900px; //temporary fixed width
    margin-top: -20px;
  }
  list-style: none;
`;