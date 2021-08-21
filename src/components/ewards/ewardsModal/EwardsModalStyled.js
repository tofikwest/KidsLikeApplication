import styled from "styled-components";

const EwardsModalStyled = styled.div`
  background-color: #fff;
  box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.25);
  padding: 60px 20px 10px 20px;
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
    font-weight: 600;
    font-size: 18px;
    line-height: 1.22;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    padding: 130px 40px 10px 40px;
    width: 600px;

    .catImg {
      /* position: absolute; */
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
      line-height: 1.23;
    }
  }
`;

export default EwardsModalStyled;
