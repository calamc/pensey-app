import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'
import thunk from 'redux-thunk'
import authenticationReducer from '../reducers/authentication'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // chrome extention -- redux dev tool for viewing state through actions

export default () => {
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filtersReducer,
            authentication: authenticationReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};

