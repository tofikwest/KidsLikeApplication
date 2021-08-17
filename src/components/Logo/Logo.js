import React from "react";
import sprite from "../../images/sprite.svg";
import LogoStyled from "./LogoStyled";
const Logo = () => {
  return (
    <LogoStyled>
      <h3 className="logoTitle">KidsLike</h3>
      <svg className="logoImg">
        <use href={sprite + "#icon-logo"} />
      </svg>
    </LogoStyled>
  );
};

export default Logo;
