import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        rest.auth.already_logged === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login"/>
        )
      }
    />
  );
};

export default ProtectedRoute;
