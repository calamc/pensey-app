import { Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import React from 'react';

import Dashboard from '../components/Dashboard'
import AddExp from '../components/AddExp'
import EditExp from '../components/EditExp'
import FAQ from '../components/FAQ'
import NotFound from '../components/NotFound'
import Header from '../components/Header'
import Login from '../components/Login'
import PrivateRoute from './PrivateRoutes'
import PublicRoute from './PublicRoutes'
import Footer from '../components/Footer'

import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
                <Switch>
                    <PublicRoute path="/" component={Login} exact={true}/>
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                    <PrivateRoute path="/create" component={AddExp}/>
                    <PrivateRoute path="/edit/:id" component={EditExp}/>
                    <Route path="/FAQ" component={FAQ}/>
                    <Route component={NotFound} />
                </Switch>
        </div>
    </Router>
);

export default AppRouter;