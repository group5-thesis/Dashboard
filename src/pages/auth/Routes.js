import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { protectedRoutes } from "router";
function Routes() {
  return (
    <Switch>
      {protectedRoutes.map((route, key) => {
        return (
          <Route
            path={"/admin" + route.path}
            exact
            component={route.component}
            key={key}
          />
        );
      })}
      <Redirect from="/admin/" to="/admin/dashboard" />
      <Redirect from="/admin/*" to="/error/pagenotfound" />
      <Route render={() => <h1>Not found!</h1>} />
    </Switch>
  );
}

export default Routes;
