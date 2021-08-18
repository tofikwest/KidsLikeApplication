import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";

const Main = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Switch>
        {mainRoutes.map(({ path, exact, component }) => (
          <Route path={path} exact={exact} component={component} key={path} />
        ))}
      </Switch>
    </Suspense>
  );
};

export default Main;
