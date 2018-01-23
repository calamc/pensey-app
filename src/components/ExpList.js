import React from 'react'
import { connect } from 'react-redux'

import ExpListItem from './ExpListItem'
import selectExpenses from '../selectors/expenses'

const ExpList = (props) => (
    <div>
        <h1>
            Expenses List
        </h1>
        {props.expenses.map((expense) => {
            return <ExpListItem key={expense.id} {...expense}/>
        })}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
}

export default connect(mapStateToProps)(ExpList);