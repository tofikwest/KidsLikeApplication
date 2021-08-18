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
    line-height: 1.25;
    font-weight: 500;
    letter-spacing: 0.04em;
    text-decoration: none;
    color: ${({ colors }) => colors.modalTextColor};
  }
  .activeNavLink {
    color: ${({ colors }) => colors.primaryTextColor};
  }

  /* @media screen and (min-width: 768px) {
    .NavList {
    }
    .navItems {
    }
    .navLink {
      text-decoration: none;
      color: ${({ colors }) => colors.primaryTextColor};
    }
    .activeNavLink {
      color: ${({ colors }) => colors.secondaryTextColor};
    }
  } */

  @media screen and (min-width: 1280px) {
    .NavList {
      display: flex;
    }

    .navItems {
      padding: 0 15px 0 15px;
      border-right: 1px solid ${({ colors }) => colors.secondaryTextColor};
    }
    .navItems:last-child {
      padding-right: 0;
      border: none;
    }
    .navItems:first-child {
      padding-left: 0;
    }
    .navLink {
      text-decoration: none;
      color: ${({ colors }) => colors.secondaryTextColor};
    }
    .activeNavLink {
      color: ${({ colors }) => colors.primaryTextColor};
    }
  }
`;

export default NavigationStyled;
