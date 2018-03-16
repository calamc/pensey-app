import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...leftoverprops
}) => (
    <Route {...leftoverprops} component={(props) => (
      isAuthenticated ? (
        <div>
        <Header/>
          <Component {...props} />
        </div>
      ) : (
        <Redirect to="/"/>
      )
    )} />
  );

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.authentication.uid
});

export default connect(mapStateToProps)(PrivateRoute);