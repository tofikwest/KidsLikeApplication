import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 17px 20px;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);

  .menuNavImg {
    width: 22px;
    height: 14px;
  }

  @media screen and (min-width: 768px) {
    padding: 17px 94px;
  }
  @media screen and (min-width: 1280px) {
    padding: 17px 50px;
  }
`;

export default HeaderStyled;
