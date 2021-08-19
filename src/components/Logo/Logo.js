import React from "react";
import { useHistory } from "react-router-dom";
import { colors } from "../../general/styles/colors";
import sprite from "../../images/sprite.svg";
import LogoStyled from "./LogoStyled";

const Logo = () => {
  const history = useHistory();

  const onhandleClickLogo = () => {
    history.push("/");
  };

  return (
    <LogoStyled colors={colors} onClick={onhandleClickLogo}>
      <h3 className="logoTitle">KidsLike</h3>
      <svg className="logoImg">
        <use href={sprite + "#icon-logo"} />
      </svg>
    </LogoStyled>
  );
};

export default Logo;
