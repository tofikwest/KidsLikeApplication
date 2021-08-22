import styled from "styled-components";

export const FooterStyled = styled.footer`
  text-align: center;

  margin: 40px 0px 80px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.08em;

  color: #858598;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: baseline;
    justify-content: center;

    margin: 50px 0px 40px;
  }

  @media screen and (min-width: 1280px) {
    justify-content: flex-end;
  }

  .footerLogo {
    @media screen and (min-width: 768px) {
      padding-right: 10px;
    }
  }

  .footerLogoIcon {
    margin-left: 4px;
  }

  .footerSlogan {
    @media screen and (min-width: 768px) {
      margin: 0;
      padding: 0 10px;
      border-right: 1px solid #e3e2e7;
      border-left: 1px solid #e3e2e7;
    }
  }

  .footerYear {
    @media screen and (min-width: 768px) {
      padding-left: 10px;
    }
  }
`;
