import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import languages from "../../languages";
import { authorizedUser } from "../../redux/auth/authSelectors";
import { LanguageContext } from "../App";

const NavigationListItems = ({ name, path, exact, isPrivat, restricted }) => {
  const isAuth = useSelector(authorizedUser);
  const { language } = useContext(LanguageContext);

  return (
    <>
      {!isPrivat && !restricted && (
        <li className="navItems">
          <NavLink className="navLink" activeClassName="activeNavLink" to={path} exact={exact}>
            {languages[language].header.navigation[name][0].toUpperCase() +
              languages[language].header.navigation[name].slice(1)}
          </NavLink>
        </li>
      )}
      {isAuth && isPrivat && !restricted && (
        <li className="navItems">
          <NavLink className="navLink" activeClassName="activeNavLink" to={path} exact={exact}>
            {languages[language].header.navigation[name][0].toUpperCase() +
              languages[language].header.navigation[name].slice(1)}
          </NavLink>
        </li>
      )}
      {!isAuth && !isPrivat && restricted && (
        <li className="navItems">
          <NavLink className="navLink" activeClassName="activeNavLink" to={path} exact={exact}>
            {languages[language].header.navigation[name][0].toUpperCase() +
              languages[language].header.navigation[name].slice(1)}
          </NavLink>
        </li>
      )}
    </>
  );
};

export default NavigationListItems;
