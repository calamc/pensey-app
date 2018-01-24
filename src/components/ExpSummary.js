import React from 'react'

import { connect } from 'react-redux'

import numeral from 'numeral'
import expensesTtl from '../selectors/expensesTtl'
import selectExps from '../selectors/expenses'
import selectExpTtl from '../selectors/expensesTtl'

import { Link } from 'react-router-dom'

// No state
export const ExpSummary = ({ expCount, expTtl }) => {
    const expAlert = expCount === 1 ? 'expense' : 'expenses'; // more than 1 exp use expenses

    const formatTtlExp = numeral(expTtl / 100).format('0,0.00');
    return (
        <div className="dash-header">
            <div className="content">
                <h1 className="dash-header__title">You are viewing <span>{expCount}</span> {expAlert}, amounting to: <span>{formatTtlExp}</span></h1>
                <div className="dash-header__createexp">
                    <Link to="/create" className="btn btn--link">Create Expense</Link>
                </div>
            </div>
        </div>
    );

};

const mapStateToProps = (state) => {
    const visExp = selectExps(state.expenses, state.filters);

    return {
        expCount: visExp.length,
        expTtl: selectExpTtl(visExp)
    };
};

export default connect(mapStateToProps)(ExpSummary);