import React, { Suspense } from "react";
import Loader from "react-loader-spinner";
import { useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import { authorizedUser } from "../../redux/auth/authSelectors";
import { mainRoutes } from "../../routes/mainRoutes";
import PrivatRoutes from "../../routes/privatRoutes";
import PublicRoutes from "../../routes/publicRoutes";
import MainStyled from "./MainStyled";

const Main = () => {
  const isAuth = useSelector(authorizedUser);
  return (
    <MainStyled>
      <Suspense fallback={<Loader />}>
        <Switch>
          {mainRoutes.map(({ path, exact, component, isPrivat, restricted }) =>
            isPrivat ? (
              <PrivatRoutes
                isAuth={isAuth}
                path={path}
                exact={exact}
                component={component}
                key={path}
              />
            ) : (
              <PublicRoutes
                isAuth={isAuth}
                path={path}
                exact={exact}
                component={component}
                restricted={restricted}
                key={path}
              />
            )
          )}
        </Switch>
      </Suspense>
    </MainStyled>
  );
};

export default Main;
