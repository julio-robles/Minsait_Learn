import React, { useState } from "react";
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export const SecureRoute = () => {

    const { hasUser, ...restProps } = useState(null);

    return hasUser ? <Route {...restProps} /> : <Redirect to="/" />;

}
SecureRoute.propTypes = {
  hasUser: PropTypes.bool.isRequired,
};

export const NoUserRoute = () => {

    const { hasUser, ...restProps } = useState(null);

    return !hasUser ? <Route {...restProps} /> : <Redirect to="/" />;

}
NoUserRoute.propTypes = {
    hasUser: PropTypes.bool.isRequired,
  };