import styled from "styled-components";

const HeaderStyled = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  width: 320px;
  margin-left: -20px;
  padding: 17px 20px;
  background-color: ${({ colors }) => colors.modalTextColor};
  box-shadow: 0px 2px 4px ${({ colors }) => colors.modalBoxShadowColor};

  z-index: 100;

  .menuNavImg {
    width: 22px;
    height: 14px;
    margin-left: auto;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 17px 94px;
    justify-content: space-between;
    margin-left: -94px;
    margin-right: -94px;

    .menuNavImg {
      margin-left: 118px;
    }
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 17px 50px;
    margin-left: -50px;
    margin-right: -50px;
  }
`;

export default HeaderStyled;
