import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { protectedRoutes } from "router";
import Placeholder from "../messages/Placeholder";
function Routes() {
  return (
    <Switch>
      {protectedRoutes.map((route, key) => {
        return (
          <Route
            path={"/admin" + route.path}
            exact
            component={route.component ? route.component : () => <Placeholder {...{ title: "Coming soon...", subtitle: "Site under construction.", route: "/admin" + route.path }} />}
            key={key}
          />
        );
      })}
      <Route path="*" component={() => <Placeholder {...{ title: "404", subtitle: "Page not found." }} />} />
      <Redirect from="/admin" to="/admin/dashboard" />
    </Switch>
  );
}

export default Routes;
