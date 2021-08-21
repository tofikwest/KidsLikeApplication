import styled from "styled-components";

const EwardsStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 20px;

  .ewardsProgresiveBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .awardsLogo {
    display: flex;
    align-items: center;
  }

  .ewardSvg {
    width: 26px;
    height: 26px;
    margin-right: 15px;
  }
  .awardsBtn {
    width: 220px;
    height: 48px;
    margin-top: 40px;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.25;
    color: ${({ colors }) => colors.modalTextColor};
    background-color: ${({ colors }) => colors.primaryBgColor};

    border: none;
    border-radius: 6px;
    cursor: pointer;
  }
`;

export default EwardsStyled;
