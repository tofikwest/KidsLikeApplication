import React, { useState } from "react";
import { useSelector } from "react-redux";
import { authorizedUser, getUserName } from "../../redux/auth/authSelectors";

import UserMenuStyled from "./UserMenuStyled";
import logOutIcon from "../../images/sprite.svg";
import { colors } from "../../general/styles/colors";

import LogoutModal from "./logoutModal/LogoutModal";

const initialStateUserInfo = {
  isLogout: false,
};

const UserMenu = () => {
  const [stateUserInfo, setStateUserInfo] = useState(initialStateUserInfo);
  const isAuth = useSelector(authorizedUser);
  const userName = useSelector(getUserName);

  const onHandleClickLogout = () => {
    setStateUserInfo((prev) => ({ ...prev, isLogout: true }));
  };

  return (
    <UserMenuStyled colors={colors}>
      {stateUserInfo.isLogout && (
        <LogoutModal setStateUserInfo={setStateUserInfo} />
      )}
      {isAuth && (
        <>
          <span className="userNameLogo">
            {userName && userName[0].toUpperCase()}
          </span>
          <span className="userName">
            {userName &&
              userName[0].toUpperCase() + userName.substring(1).toLowerCase()}
          </span>
          <svg className="iconLogOut" onClick={onHandleClickLogout}>
            <use href={logOutIcon + "#icon-logOut"} />
          </svg>
        </>
      )}
    </UserMenuStyled>
  );
};

export default UserMenu;
