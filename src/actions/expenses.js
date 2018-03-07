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

export const startAddExp = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0
        } = expenseData;
        const expense = { description, note, amount, createdAt };
        database.ref('expenses').push(expense).then((ref) => {
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

// Remove Exp
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

