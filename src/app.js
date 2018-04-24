import React from 'react';
import ReactDOM from 'react-dom';

// Import CSS and SCSS files
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'

// ROUTES
import AppRouter, { history } from './routers/AppRouter.js'

// REDUX PROVIDER FOR THE REDUX STORE - manages our expenses and filters
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'

// ACTIONS
import {startSetExpenses} from './actions/expenses'
import {setTextFilter} from './actions/filters'

// SELECTORS (FILTERS)
import getVisibleExpenses from './selectors/expenses'

import { firebase } from './firebase/firebase'

// IMPORT LOGIN & LOGOUT
import { login, logout } from './actions/authentication'

// IMPORT LOADER GIF
import LoaderGif from './components/Loader'


// Create redux store
const store = configureStore();

// Test variables for list population
// Get the state of the store
const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
    
);

// MAKE SURE APP ONLY RENDERS A SINGLE TIME
let hasRend = false;
const renderApp = () => {
    if (!hasRend) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRend = true;
    }
};

ReactDOM.render(<LoaderGif />, document.getElementById('app'));



firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        console.log('Hello, you are logged in');
        // store.dispatch(login(user.uid));
        store.dispatch(login(user));
        store.dispatch(startSetExpenses()).then(() => {
            // Render Pensey to the screen
            renderApp();
            if (history.location.pathname === '/') {
                history.push('/dashboard');
            } 
        });
    } else {
        console.log('Goodbye, logged out');
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});