import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

export const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...leftoverprops
}) => (
    <Route {...leftoverprops} component={(props) => (
      isAuthenticated ? ( // if they are logged in, display dashboard
        <Redirect to="/dashboard"/>
      ) : (
        <Component {...props} />
      )
    )} />
  );

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.authentication.uid
});

export default connect(mapStateToProps)(PublicRoute);