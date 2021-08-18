import styled from "styled-components";

const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  .logoTitle {
    font-size: 16px;
    line-height: 1.25;
    font-weight: 700;
    letter-spacing: 0.08em;
    margin-right: 8px;
  }
  .logoImg {
    width: 18px;
    height: 18px;
    fill: ${({ colors }) => colors.primaryBgColor};
  }
`;

export default LogoStyled;
