import styled from "styled-components";
const BalanceCounterStyled = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;

  .balanceItemBox {
    display: flex;
    flex-direction: column;
  }
  .balanceItems {
    font-weight: 500;
    font-size: 12px;
    line-height: 1.25;
    letter-spacing: 0.04em;
    color: ${({ colors }) => colors.thirdTextColor};
  }
  .balanceCount {
    margin-left: 10px;

    font-size: 14px;
    line-height: 1.2;
    letter-spacing: 0.04em;
    color: ${({ colors }) => colors.primaryTextColor};
  }
  @media screen and (min-width: 768px) {
    margin-left: 52px;
  }
  @media screen and (min-width: 1280px) {
    margin-left: 42px;
  }
`;

export default BalanceCounterStyled;
