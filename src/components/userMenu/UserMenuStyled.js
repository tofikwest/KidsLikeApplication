import styled from "styled-components";

const UserMenuStyled = styled.div`
  position: absolute;
  top: 20px;
  left: 30px;
  display: flex;
  align-items: center;

  .userNameLogo {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    width: 26px;
    height: 24px;
    color: #fff;
    background-color: blue;
    border-radius: 50%;
  }
  .userName {
    font-size: 12px;
    line-height: 1.25;
    letter-spacing: 0.04em;
    padding-right: 15px;
    margin-right: 15px;
    color: #fff;
    border-right: 1px solid #fff;
  }
  .iconLogOut {
    width: 18px;
    height: 18px;
    fill: #fff;
  }
  @media screen and (min-width: 768px) {
    position: relative;

    .userName {
      color: black;
      border-color: black;
    }
    .iconLogOut {
      fill: black;
    }
  }
`;

export default UserMenuStyled;
