import React, { PropTypes } from 'react';
import { Redirect, Route } from 'react-router-native';
import isAuthed from '../lib/isAuthed';

const AuthedRoute = ({ component, ...rest }) => (
  <Route {...rest} render={(props) => {
    if (isAuthed()) {
      return React.createElement(component, props);
    }

    return (<Redirect to="/login" />);
  }} />
);

AuthedRoute.propTypes = {
  component: PropTypes.func.isRequired,
}

export default AuthedRoute;