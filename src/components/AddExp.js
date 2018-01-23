import React from 'react'
import ExpenseForm from './ExpenseForm'

// REDUX - get props and use them throughout different components
import { connect } from 'react-redux'
import { addExpense } from '../actions/expenses'

const AddExp = (props) => (
    <div>
        <h1>Pensey: Add Expense</h1>
        <ExpenseForm 
        
        onSubmit={(expense) => {
            props.dispatch(addExpense(expense));
            props.history.push('/');
        }}/>
    </div>
);

export default connect()(AddExp);