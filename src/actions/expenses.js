// import uuid from npm using yarn add uuid@3.2.1
// https://www.npmjs.com/package/uuid 
import uuid from 'uuid'

// Expenses Actions
// Add Exp
export const addExpense = ({ 
    description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0 } = {} ) => ({
            type: 'ADD_EXPENSE',
            expense: {
                id: uuid(),
                description,
                note,
                amount,
                createdAt
        }
});

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

