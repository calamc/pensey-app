import React from 'react'

// React-dates datepicker package
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

// Import Momentjs
import moment from 'moment'

// Create timenow for dates
const timenow = moment();
console.log(timenow.format('Do MMM YY')); // Checks it works

// Expense form
export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calFocused: false
        };
    }

    // Handle user onChanged events

    // Calendar - datepicker - uses react-dates from airbnb github
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calFocused: focused}))
    };

    // Description
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description}))
    };

    // Notes
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };

    // Amount €
    onAmountChange = (e) => {
        const amount = e.target.value;

        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    };

    // Date range
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
   };

   // Form submit
   onSubmit = (e) => {
    e.preventDefault();

    // Handle form submission
    if (!this.state.description || !this.state.amount) {
        this.setState(() => ({ error: 'No description or amount entered. Please try again'}))
    } else {
        this.setState(() => ({ error: 'Expense saved!' }));
        this.props.onSubmit({
            description: this.state.description,
            amount: parseFloat(this.state.amount, 10) * 100, // gets rid of decimals
            createdAt: this.state.createdAt.valueOf(),
            note: this.state.note
        });
    }
   };
   render() {
        return (
                
                <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error">{this.state.error}</p>}
                    <input className="text-input" type="text" placeholder="Desc" value={this.state.description} onChange={this.onDescriptionChange} autoFocus/>
                    <input className="text-input" type="text" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange} />
                    <SingleDatePicker
                        showClearDate={true}   
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea className="text-area" placeholder="Add more detail for expense" value={this.state.note} onChange={this.onNoteChange}></textarea>
                    <div>
                        <button className="btn">
                            {/*Passed down the path prop in AddExp.js compnent
                            So I have access to the path location for create/update view*/}
                            {this.props.path ? "Create new expense" : "Update expense"}
                        </button>
                    </div>
                </form>
        )
    }
}