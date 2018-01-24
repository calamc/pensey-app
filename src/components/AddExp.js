import React from 'react'
import ExpenseForm from './ExpenseForm'

// REDUX - get props and use them throughout different components
import { connect } from 'react-redux'
import { addExpense } from '../actions/expenses'

const AddExp = (props) => (
    <div>
    <div className="dash-header">
        <div className="content">
            <h1 className="dash-header__title">Pensey: Add Expense</h1>
        </div>
    </div>
        <div className="content">
            <ExpenseForm onSubmit={(expense) => {
                props.dispatch(addExpense(expense));
                props.history.push('/');
            }}/>
        </div>
    </div>
);

export default connect()(AddExp);