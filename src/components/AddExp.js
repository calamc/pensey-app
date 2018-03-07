import React from 'react'
import ExpenseForm from './ExpenseForm'

// REDUX - get props and use them throughout different components
import { connect } from 'react-redux'
import { startAddExp } from '../actions/expenses'

export class AddExp extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExp(expense);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <div className="dash-header">
                    <div className="content">
                        <h1 className="dash-header__title">Pensey: Add Expense</h1>
                    </div>
                </div>
            <div className="content">
                <ExpenseForm onSubmit={this.onSubmit}/>
            </div>
        </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddExp: (expense) => dispatch(startAddExp(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExp);

// const AddExp = (props) => (
//     <div>
//     <div className="dash-header">
//         <div className="content">
//             <h1 className="dash-header__title">Pensey: Add Expense</h1>
//         </div>
//     </div>
//         <div className="content">
//             <ExpenseForm onSubmit={(expense) => {
//                 props.dispatch(addExpense(expense));
//                 props.history.push('/');
//             }}/>
//         </div>
//     </div>
// );