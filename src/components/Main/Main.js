import React, { Suspense } from "react";
import { useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import { mainRoutes } from "../../routes/mainRoutes";

import PrivatRoutes from "../../routes/privatRoutes";
import PublicRoutes from "../../routes/publicRoutes";
import MainStyled from "./MainStyled";


const Main = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (

    <MainStyled>
    <Suspense fallback={<p>...loading</p>}>
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

    
//       <Suspense fallback={<p>...loading</p>}>
//         <Switch>
//           {mainRoutes.map(({ path, exact, component }) => (
//             <Route path={path} exact={exact} component={component} key={path} />
//           ))}
//         </Switch>
//       </Suspense>
    
  );
};

export default Main;
