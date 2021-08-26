import styled from "styled-components";

const AwardsErrorStyled = styled.div`
  position: relative;
  width: 100%;

  .errorAwards {
    position: absolute;
    width: 100%;
    top: 20px;
    left: 50%;
    transform: translate(-50%, -50%);
    color: ${({ colors }) => colors.awardsErrorColor};
    text-align: center;
  }
`;

export default AwardsErrorStyled;
