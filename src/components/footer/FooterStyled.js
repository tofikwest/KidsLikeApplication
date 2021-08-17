import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  align-items: baseline;
  justify-content: flex-end;

  margin: 50px 0px 40px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 1.2;
  letter-spacing: 0.08em;

  color: #858598;

  .footerLogo {
    padding-right: 10px;
  }

  .footerLogoIcon {
    margin-left: 4px;
  }

  .footerSlogan {
    margin: 0;
    padding: 0 10px;
    border-right: 1px solid #e3e2e7;
    border-left: 1px solid #e3e2e7;
  }

  .footerYear {
    padding-left: 10px;
  }
`;
