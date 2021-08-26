import styled from "styled-components";

const AwardsErrorStyled = styled.div`
  position: relative;
  width: 100%;

  .errorAwards {
    position: absolute;
    top: 10px;
    color: ${({ colors }) => colors.awardsErrorColor};
  }
`;

export default AwardsErrorStyled;
