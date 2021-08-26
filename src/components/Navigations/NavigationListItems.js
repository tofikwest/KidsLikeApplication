import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { authorizedUser } from "../../redux/auth/authSelectors";

const NavigationListItems = ({ name, path, exact, isPrivat, restricted }) => {
  const isAuth = useSelector(authorizedUser);
  const { t } = useTranslation();

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
            {t("Contacts")}
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
            {path === "/planning" && t("Planning")}
            {path === "/awards" && t("Awards")}
            {path === "/" && t("Home")}
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
            {t("Authorization")}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default NavigationListItems;
