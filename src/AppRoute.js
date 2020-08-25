import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ProtectedRoute from "router/routerContainer/ProtectedRoute";
import PublicRoute from "router/routerContainer/PublicRoute";
import { publicRoutes, protectedRoutes, guestRoutes } from "router";

const AppRoute = (props) => {
  return (
    <>
      <Router>
        <Switch>
          {
            // for un-authenticated users ONLY
            publicRoutes.map((route, idx) => (
              <PublicRoute
                key={idx}
                exact={route.exact}
                {...props.auth}
                path={route.path}
                component={route.component}
              />
            ))
          }

          {protectedRoutes.map((route, idx) => (
            <ProtectedRoute
              key={idx}
              exact={route.exact}
              path={route.path}
              {...props.auth}
              component={route.component}
            />
          ))}

          {guestRoutes.map((route, idx) => (
            <Route
              key={idx}
              exact={route.exact}
              path={route.path}
              {...props.auth}
              component={route.component}
            />
          ))}
          <Redirect from="*" to="/error/pagenotfound" />
        </Switch>
      </Router>
    </>
  );
};

export default AppRoute;
