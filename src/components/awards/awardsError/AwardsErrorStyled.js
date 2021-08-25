import styled from "styled-components";
import { colors } from "../../../general/styles/colors";

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
