import React from "react";
import Navigation from "../navigation/Navigation";

import HeaderStyled from "./HeaderStyled";
const Header = () => {
  return (
    <HeaderStyled>
      <span>logo</span>
      <p>Баланс баллов:</p>
      <Navigation />
    </HeaderStyled>
  );
};

export default Header;
