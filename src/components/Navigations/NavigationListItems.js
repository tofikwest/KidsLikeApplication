import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const NavigationListItems = ({ name, path, exact, isPrivat, restricted }) => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <>
      {!isPrivat && !restricted && (
        <li className="navItems">
          <NavLink
            className="navLink"
            activeClassName="activeNavLink"
            to={path}
            exact={exact}
          >
            {name}
          </NavLink>
        </li>
      )}
      {isAuth && isPrivat && !restricted && (
        <li className="navItems">
          <NavLink
            className="navLink"
            activeClassName="activeNavLink"
            to={path}
            exact={exact}
          >
            {name}
          </NavLink>
        </li>
      )}
      {!isAuth && !isPrivat && restricted && (
        <li className="navItems">
          <NavLink
            className="navLink"
            activeClassName="activeNavLink"
            to={path}
            exact={exact}
          >
            {name}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default NavigationListItems;
