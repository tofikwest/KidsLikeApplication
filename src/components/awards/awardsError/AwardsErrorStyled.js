import styled from "styled-components";

const AwardsErrorStyled = styled.div`
  position: relative;
  width: 100%;

  .errorAwards {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${({ colors }) => colors.awardsErrorColor};
  }
`;

export default AwardsErrorStyled;
