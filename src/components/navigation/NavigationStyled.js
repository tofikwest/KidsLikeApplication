import styled from "styled-components";

const NavigationStyled = styled.nav`
  .NavList {
    list-style: none;
  }
  .navLink {
    text-decoration: none;
    color: ${({ colors }) => colors.primaryTextColor};
  }
  .activeNavLink {
    color: ${({ colors }) => colors.secondaryTextColor};
  }
`;

export default NavigationStyled;
