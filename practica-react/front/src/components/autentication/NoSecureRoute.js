import React from "react";
import { Route, Redirect } from 'react-router-dom';

function NoSecureRoute ({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  return (
  <Route
  {...restOfProps}
  render={(props) =>
    isAuthenticated === 'false' ? <Component {...props} /> : <Redirect to="/" />
  }
  />
);
}
export default NoSecureRoute;