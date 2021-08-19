import React from "react";
import { mainRoutes } from "../../routes/mainRoutes";
import NavigationListItems from "./NavigationListItems";
import NavigationStyled from "./NavigationStyled";
import { colors } from "../../general/styles/colors";

const Navigation = () => {
  return (
    <NavigationStyled colors={colors}>
      <ul className="NavList">
        {mainRoutes.map((route) => (
          <NavigationListItems {...route} key={route.path} />
        ))}
      </ul>
    </NavigationStyled>
  );
};

export default Navigation;
