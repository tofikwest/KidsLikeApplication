import styled from "styled-components";

const AwardsStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 20px;

  .awardsProgresiveBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .awardsLogo {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }

  .awardSvg {
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
  .awardsBtn:hover,
  .awardsBtn:focus {
    background-color: ${({ colors }) => colors.hoverBtnColor};
  }

  @media screen and (min-width: 768px) {
    padding-top: 40px;

    .awardsProgresiveBox {
      margin-bottom: 40px;
    }
  }
`;

export default AwardsStyled;
