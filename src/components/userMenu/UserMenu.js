import React from "react";

import { colors } from "../../general/styles/colors";
import UserMenuStyled from "./UserMenuStyled";
import logOutIcon from "../../images/sprite.svg";
import { useDispatch, useSelector } from "react-redux";
import { authorizedUser } from "../../redux/auth/authSelectors";
import { logOut } from "../../redux/auth/authOperations";

const UserMenu = () => {
  const dispatch = useDispatch();
  const signOut = () => {
    dispatch(logOut());
  };

  const isAuth = useSelector(authorizedUser);
  return (
    <UserMenuStyled colors={colors}>
      {isAuth && (
        <button type="button" onClick={signOut}>
          <span className="userNameLogo">В</span>
          <span className="userName">Владислав</span>
          <svg className="iconLogOut">
            <use href={logOutIcon + "#icon-logOut"} />
          </svg>
        </button>
      )}
    </UserMenuStyled>
  );
};

export default UserMenu;
