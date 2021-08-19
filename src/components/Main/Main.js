import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";
import MainStyled from "./MainStyled";

const Main = () => {
  return (
    <MainStyled>
      <Suspense fallback={<p>...loading</p>}>
        <Switch>
          {mainRoutes.map(({ path, exact, component }) => (
            <Route path={path} exact={exact} component={component} key={path} />
          ))}
        </Switch>
      </Suspense>
    </MainStyled>
  );
};

export default Main;
