import styled from "styled-components";

const AwardsModalStyled = styled.div`
  background-color: ${({ colors }) => colors.modalTextColor};
  box-shadow: ${({ colors }) => `15px 15px 20px ${colors.modalBoxShadowColor}`};
  padding: 60px 20px 50px 20px;
  width: 280px;
  min-height: 300px;

  .catImg {
    position: absolute;
    width: 130px;
    height: 150px;
    transform: translate(50%, -110%);
  }
  .iconCloseAwards {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 15px;
    height: 15px;
  }
  .awardsModalTitle {
    margin-bottom: 25px;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.22;
    text-align: center;
  }

  .modalListAwards {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-bottom: -35px;
  }

  .modalListItemsAwards {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: ${(giftIds) => (giftIds.length === 1 ? "100%" : "calc(100% / 2)")};
    margin-bottom: 35px;
  }

  .modalListItemsTitleAwards {
    font-size: 12px;
    line-height: 1.25;

    letter-spacing: 0.04em;
  }
  .modalListItemsImageAwards {
    margin-bottom: 15px;
    width: 90px;
    height: 90px;

    border: 5px solid ${({ colors }) => colors.primaryBgColor};
    border-radius: 50%;
  }

  @media screen and (min-width: 768px) {
    padding: 130px 40px 50px 40px;
    width: 600px;

    .catImg {
      width: 200px;
      height: 230px;
      transform: translate(80%, -110%);
    }
    .iconCloseAwards {
      position: absolute;
      top: 20px;
      right: 20px;
      width: 20px;
      height: 20px;
    }
    .awardsModalTitle {
      font-size: 30px;
      line-height: 1.25;
    }

    .modalListAwards {
      margin-right: -35px;
    }

    .modalListItemsAwards {
      margin: 0 35px 35px 0;
      width: calc((100% / 4) - 35px);
    }
  }
`;

export default AwardsModalStyled;
