import React from "react";
import sprite from "../../images/sprite.svg";
import { colors } from "../../general/styles/colors";
import LogoStyled from "./LogoStyled";

const Logo = () => {
  return (
    <LogoStyled colors={colors}>
      <h3 className="logoTitle">KidsLike</h3>
      <svg className="logoImg">
        <use href={sprite + "#icon-logo"} />
      </svg>
    </LogoStyled>
  );
};

export default Logo;
