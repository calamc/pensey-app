// import uuid from npm using yarn add uuid@3.2.1
// https://www.npmjs.com/package/uuid 
import uuid from 'uuid'

import database from '../firebase/firebase'

// Expenses Actions
// Add Exp
export const addExpense = (expense) => ({
            type: 'ADD_EXPENSE',
            expense
});

// WORK WITH FIREBASE DB
// ASYNCE ACTIONS - READ & WRITE
export const startAddExp = (expenseData = {}) => {
    return (dispatch, getState) => {
        // get user id for firebase expense personal
        const uid = getState().authentication.uid;
        const {
            title = '',
            details = '',
            amount = 0,
            createdAt = 0,
            category = '',
            km = 0, 
            receiptURL = ''
        } = expenseData;
        const expense = { title, details, amount, createdAt, category, km, receiptURL };
        database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

// Edit Exp
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().authentication.uid;

        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates));
        });
    };
};

// Remove Exp
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch, getState) => {
        const uid = getState().authentication.uid;

        return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({ id }));
        });
    };
};

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses
});

// async action
export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().authentication.uid;
        // load specific uid logged in user expenses
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot) => {
            const expenses = [];

            snapshot.forEach((childSnapshot) => {
                expenses.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                });
            });
            dispatch(setExpenses(expenses));
        });
    };
};


