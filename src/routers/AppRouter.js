import { BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import React from 'react';

import Dashboard from '../components/Dashboard'
import AddExp from '../components/AddExp'
import EditExp from '../components/EditExp'
import FAQ from '../components/FAQ'
import NotFound from '../components/NotFound'
import Header from '../components/Header'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
                <Switch>
                    <Route path="/" component={Dashboard} exact={true}/>
                    <Route path="/create" component={AddExp}/>
                    <Route path="/edit/:id" component={EditExp}/>
                    <Route path="/FAQ" component={FAQ}/>
                    <Route component={NotFound} />
                </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;