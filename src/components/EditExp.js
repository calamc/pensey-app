import React from 'react'

import { connect } from 'react-redux'

import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'

const EditExp = (props) => {
    return (
        <div>
        <div className="dash-header">
            <div className="content">
                <h1 className="dash-header__title">Edit expense</h1>
            </div>
        </div>
        <div className="content">
            <ExpenseForm 
            expense={props.expense}
            onSubmit={(expense) => {
                props.dispatch(editExpense(props.expense.id, expense));
                props.history.push('/');
            }}/>
            <button className="btn btn--secondary-x" onClick={() => {
                props.dispatch(removeExpense({ id: props.expense.id }));
                props.history.push('/');
            }}>Delete</button>
            </div>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditExp);