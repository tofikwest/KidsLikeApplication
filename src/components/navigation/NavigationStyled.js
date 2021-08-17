import styled from "styled-components";

const NavigationStyled = styled.nav`
  .NavList {
    padding: 0;
    list-style: none;
  }
  .navItems {
    padding: 15px 0 15px 30px;
    border-bottom: 1px solid ${({ colors }) => colors.modalTextColor};
  }
  .navLink {
    font-size: 12px;
    font-weight: 500;
    text-decoration: none;
    color: ${({ colors }) => colors.modalTextColor};
  }
  .activeNavLink {
    color: ${({ colors }) => colors.primaryTextColor};
  }

  @media screen and (min-width: 768px) {
    .navItems {
    }
    .navLink {
      text-decoration: none;
      color: ${({ colors }) => colors.primaryTextColor};
    }
    .activeNavLink {
      color: ${({ colors }) => colors.secondaryTextColor};
    }
  }
`;

export default NavigationStyled;
