import React from 'react';
import ReactDOM from 'react-dom';

// Import CSS and SCSS files
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'

// ROUTES
import AppRouter from './routers/AppRouter.js'

// REDUX PROVIDER FOR THE REDUX STORE - manages our expenses and filters
import {Provider} from 'react-redux'
import configureStore from './store/configureStore'

// ACTIONS
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'

// SELECTORS (FILTERS)
import getVisibleExpenses from './selectors/expenses'

import './firebase/firebase'


// Create redux store
const store = configureStore();

// Test variables for list population
// Get the state of the store

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
    
);

// Render Pensey to the screen
ReactDOM.render(jsx, document.getElementById('app'));