import React from 'react'

import { connect } from 'react-redux'

import ExpenseForm from './ExpenseForm'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'

export class EditExp extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/');
    };
    onRemove = () => {
        this.props.startRemoveExpense({ id: this.props.expense.id});
        this.props.history.push('/');
    };
    render() {
    return (
        <div>
        <div className="dash-header">
            <div className="content">
                <h1 className="dash-header__title">Edit/Update your expense</h1>
            </div>
        </div>
        <div className="content">
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit}/>
            <button className="btn btn--secondary-x" onClick={this.onRemove}>Delete Expense</button>
            </div>
        </div>
        );
    }
};

const mapStateToProps = (state, props) => ({
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
});

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExp);