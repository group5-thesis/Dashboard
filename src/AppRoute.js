import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ProtectedRoute from "router/routerContainer/ProtectedRoute";
import PublicRoute from "router/routerContainer/PublicRoute";
import { publicRoutes, guestRoutes } from "router";
import App from "pages/auth/App";

const AppRoute = (props) => {
  return (
    <>
      <Router>
        <Switch>
          <ProtectedRoute path="/admin" {...props.auth} component={App} />
          <Route path="/admin" component={App} />

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
