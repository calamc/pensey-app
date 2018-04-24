import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const PrivateRoute = ({
  isAuthenticated,
  userProvider,
  component: Component,
  ...leftoverprops
}) => (
    <Route {...leftoverprops} component={(props) => (
      isAuthenticated ? (
        <div>
        <Header/>
          <Component {...props} />
          <Footer userProvider={userProvider}/>
        </div>
      ) : (
        <Redirect to="/"/>
      )
    )} />
  );

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.authentication.uid,
  userProvider: state.authentication.provider
});

export default connect(mapStateToProps)(PrivateRoute);