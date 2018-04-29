import React from 'react'
import { connect } from 'react-redux'

import ExpListItem from './ExpListItem'
import selectExpenses from '../selectors/expenses'

//import ExpLineChart from './ExpLineChart'


const ExpList = (props) => (
    <div className="content">
        <div className="list-header">
            <div className="for-phone">Expenses</div>
            <div className="for-computer">Expense List</div>
            <div className="for-computer">Amount</div>
        </div>
    <div className="list-box">{props.expenses.length === 0 ? ( <div className="list-item--message"><span>Please create a new expense to start seeing expenses here.</span></div>) : (
            props.expenses.map((expense) => {
                return <ExpListItem key={expense.id} {...expense}/>;
            })
        )
    }</div>
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters),
        filters: state.filters
    };
}

export default connect(mapStateToProps)(ExpList);