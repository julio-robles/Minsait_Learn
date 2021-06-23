import React from "react";
import { Route, Redirect } from 'react-router-dom';

function SecureRoute ({ component: Component, ...restOfProps }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  console.log(isAuthenticated);
  return (
  <Route
  {...restOfProps}
  render={(props) =>
    isAuthenticated === "true" ? <Component {...props} /> : <Redirect to="/login" />
  }
  />
);
}
export default SecureRoute;