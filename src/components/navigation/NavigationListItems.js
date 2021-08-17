import React from "react";
import { NavLink } from "react-router-dom";
const NavigationListItems = ({ name, path, exact }) => {
  return (
    <li>
      <NavLink
        className="navLink"
        activeClassName="activeNavLink"
        to={path}
        exact={exact}
      >
        {name}
      </NavLink>
    </li>
  );
};

export default NavigationListItems;
