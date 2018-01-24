import React from 'react'
import { connect } from 'react-redux'

// IMPORT filters
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'

// IMPORT styles
import { DateRangePicker } from 'react-dates'

class ExpListFilters extends React.Component {
    state= {
        calendarFocused: null
    };

    // Start and end dates props dispatch
    onDatesChange = ({ startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    }

    render() {
        return (
            <div className="content">
            <div className="in-group">
            <div className="in-group__item"><DateRangePicker showClearDates={true} startDate={this.props.filters.startDate} endDate={this.props.filters.endDate} onDatesChange={this.onDatesChange}
                focusedInput={this.state.calendarFocused} onFocusChange={this.onFocusChange} numberOfMonths={1} isOutsideRange={() => false} /></div>
                <div className="in-group__item"><select className="select" value={this.props.filters.sortBy} onChange={(e) => {
                    if (e.target.value === 'date') {
                        this.props.dispatch(sortByDate());
                    } else if (e.target.value === 'amount') {
                        this.props.dispatch(sortByAmount());
                    }
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select></div>
                <div className="in-group__item search-box"><input
                placeholder="Search for your expenses" className="text-input" type="text" value={this.props.filters.text} onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value));
                }}/></div>
            </div>
            </div>
        );
    }
}

// Get the filters props to pass down to react component
const mapStateToProps = (state) => {
    return {
        filters: state.filters
    };
};

export default connect(mapStateToProps)(ExpListFilters);