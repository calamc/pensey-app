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


// Create redux store
const store = configureStore();

// Test variables for list population
store.dispatch(addExpense({ description: 'Electricity bill', amount: 65000}));
store.dispatch(addExpense({ description: 'Printing', amount: 65000}));
store.dispatch(addExpense({ description: 'Sky broadband', amount: 65000}));
store.dispatch(addExpense({ description: 'Oil bill', createdAt: 190500}));
store.dispatch(addExpense({ description: 'Rent', amount: 111188, createdAt: 13500}));
store.dispatch(addExpense({ description: 'Virgin Media', amount: 165000}));
store.dispatch(addExpense({ description: 'TV License', amount: 255000}));


// Get the state of the store
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses,state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
    
);

// Render Pensey to the screen
ReactDOM.render(jsx, document.getElementById('app'));