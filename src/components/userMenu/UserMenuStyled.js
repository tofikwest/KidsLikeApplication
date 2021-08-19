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
    color: ${({ colors }) => colors.modalTextColor};
    background-color: ${({ colors }) => colors.userLogoBgColor};
    border-radius: 50%;
  }
  .userName {
    font-size: 12px;
    line-height: 1.25;
    letter-spacing: 0.04em;
    padding-right: 15px;
    margin-right: 15px;
    color: ${({ colors }) => colors.modalTextColor};
    border-right: 1px solid ${({ colors }) => colors.modalTextColor};
  }
  .iconLogOut {
    width: 18px;
    height: 18px;
    fill: ${({ colors }) => colors.modalTextColor};
  }
  @media screen and (min-width: 768px) {
    position: static;
    margin-left: 40px;

    .userName {
      color: ${({ colors }) => colors.secondaryTextColor};
      border-color: ${({ colors }) => colors.secondaryTextColor};
    }
    .iconLogOut {
      fill: ${({ colors }) => colors.secondaryTextColor};
    }
  }
`;

export default UserMenuStyled;
