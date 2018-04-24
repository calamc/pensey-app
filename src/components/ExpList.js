import React from 'react'
import { connect } from 'react-redux'

import ExpListItem from './ExpListItem'
import selectExpenses from '../selectors/expenses'

//import ExpLineChart from './ExpLineChart'

// export class ExpList extends React.Component {
//     componentWillUpdate() {
//         const base = document.documentElement;
//         const prev = base.scrollTop;
//         setTimeout(() => {
//             base.scroll(0, prev);
//         }, 10);
//     }

//     render() {
//         const props =this.props;
//         return (
//             <div className="content">
//                 {props.filters.chartToggle ?
//                     <div className="list-body__graph">
//                         <ExpLineChart {...props} />
//                     </div> :
//                     <div>
//                         <div className="list-header">
//                             <div className="show-for-phone">Expenses</div>
//                             <div className="show-for-computer">Expense</div>
//                             <div className="show-for-computer">Amount</div>
//                         </div>
//                         <div className="list-box">
//     {props.expenses.length === 0 ? ( <div className="list-item--message"><span>You have no expenses to show.</span></div>) : (
//             props.expenses.map((expense) => {
//                 return <ExpListItem key={expense.id} {...expense}/>;
//             })
//         )
//     }</div>
//                     </div>
//             }     
//             </div>
//         )
//     }
// }


const ExpList = (props) => (
    <div className="content">
    <div className="list-header">
        <div className="for-phone">Expenses</div>
        <div className="for-computer">Expense List</div>
        <div className="for-computer">Amount</div>
    </div>
    <div className="list-box">
    {props.expenses.length === 0 ? ( <div className="list-item--message"><span>Please create a new expense to start seeing 
    expenses here.</span></div>) : (
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