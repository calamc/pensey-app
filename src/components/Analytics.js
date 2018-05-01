import React from 'react'
import { Pie } from 'react-chartjs-2'
import {connect} from 'react-redux'

import moment from 'moment'
import numeral from 'numeral'

import selectExpenses from '../selectors/expenses'
import selectExpensesTtl from '../selectors/expensesTtl'

export const Analytics = ({expCount, expTtl, expenses}) => {

    const data = {
        datasets: [{
            data: [20, 40, 40]
        }],
        labels: [
            'Travel',
            'Meeting',
            'Food and Drink'
        ]
    }

    const options = {
        legend: {
            display: true,
        },
        cutoutPercentage: 20
    }

    const totalAmount = numeral(expTtl / 100).format('€0,0.00');

    return (
        <div className="content">
            <div className="header-analytics">
                <h1 className="dash-header__title"><span>Analytics</span></h1>
            </div>
            <div className="content">
                <h1 className="dash-header__title">You have added <span className="dash-header__s">{expCount}</span> expenses in total since you created your account.</h1>
                <h1 className="dash-header__title">The combined total of all your expenses is <span className="dash-header__s">€{totalAmount}</span></h1>
            </div>
            <div className="content">
            <hr/>
                <h1 className="dash-header__title">Category view</h1>
                <Pie data={data} options={options} redraw/>
            </div>
        </div>
    )
};

const mapStateToProps = (state) => {
    const allExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expCount: allExpenses.length,
        expTtl: selectExpensesTtl(allExpenses),
        expHidden: state.expenses.length - allExpenses.length,
        expenses: selectExpenses(state.expenses, state.filters)
        
    };
};

export default connect(mapStateToProps)(Analytics);