import React from 'react'
import { connect } from 'react-redux'

import ExpListItem from './ExpListItem'
import selectExpenses from '../selectors/expenses'

const ExpList = (props) => (
    <div className="content">
    <div className="list-header">
        <div className="for-phone">Expenses</div>
        <div className="for-computer">Expense List</div>
        <div className="for-computer">Amount</div>
    </div>
    <div className="list-box">
    {props.expenses.length === 0 ? ( <div className="list-item--message"><span>You have no expenses to show.</span></div>) : (
            props.expenses.map((expense) => {
                return <ExpListItem key={expense.id} {...expense}/>;
            })
        )
    }</div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
}

export default connect(mapStateToProps)(ExpList);