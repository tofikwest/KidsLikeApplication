import React from "react";
import logoImg from "../../images/logo.svg";
import LogoStyled from "./LogoStyled";
const Logo = () => {
  return (
    <LogoStyled>
      <h3 className="logoTitle">KidsLike</h3>
      <img className="logoImg" src={logoImg} alt="" />
    </LogoStyled>
  );
};

export default Logo;
