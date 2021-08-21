import styled from "styled-components";

export const CardListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-self: flex-end;

  margin-left: auto;
  margin-right: auto;
  margin-inline-end: 0;

  width: 280px;
  margin-top: -20px;

  @media screen and (min-width: 768px) {
    width: 680px;

    margin-top: -30px;
    margin-left: -20px;
  }

  @media screen and (min-width: 1280px) {
    width: ${({ location }) =>
      location === "/planning" || location === "/awards" ? "1220px" : "900px"};
    margin-top: -20px;
  }
  list-style: none;
`;
