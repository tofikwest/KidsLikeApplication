import React from "react";
import { mainRoutes } from "../../routes/mainRoutes";
import NavigationListItems from "./NavigationListItems";
import { colors } from "../../general/styles/colors";
import NavigationStyled from "./NavigationStyled";

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
