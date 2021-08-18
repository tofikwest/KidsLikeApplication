import styled from "styled-components";
const BalanceCounterStyled = styled.div`
  display: flex;
  flex-direction: column;
  .balanceItems {
    font-weight: 500;
    font-size: 12px;
    line-height: 1.25;
    letter-spacing: 0.04em;
    color: ${({ colors }) => colors.thirdTextColor};
  }
`;

export default BalanceCounterStyled;
