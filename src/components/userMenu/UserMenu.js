import React from "react";

import { colors } from "../../general/styles/colors";
import UserMenuStyled from "./UserMenuStyled";
import logOutIcon from "../../images/sprite.svg";

const UserMenu = () => {
  return (
    <UserMenuStyled colors={colors}>
      <span className="userNameLogo">В</span>
      <span className="userName">Владислав</span>
      <svg className="iconLogOut">
        <use href={logOutIcon + "#icon-logOut"} />
      </svg>
    </UserMenuStyled>
  );
};

export default UserMenu;
