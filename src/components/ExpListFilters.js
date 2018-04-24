import React from 'react'
import { connect } from 'react-redux'

// IMPORT filters
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate, setChartToggle } from '../actions/filters'

// IMPORT styles
import { DateRangePicker } from 'react-dates'

class ExpListFilters extends React.Component {
    state= {
        calendarFocused: null
    };

    // change text - search
    onTextChanged = (e) => {
        this.props.setTextFilter(e.target.value);
    };

    onSortChanged = (e) => {
        if (e.target.value === 'date') {
            this.props.sortByDate();
        } else if (e.target.value === 'amount') {
            this.props.sortByAmount();
        }
    };

    // Start and end dates props dispatch
    onDatesChange = ({ startDate, endDate}) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    };

    onFocusChanged = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };

    // chart.js 
    // toggle button
    onChartClick = () => {
        this.props.setChartToggle(this.props.filters.chartToggle);
    };

    render() {
        return (
            <div className="content">
                <div className="in-group">
                    <div className="in-group__item">
                        <DateRangePicker 
                            showClearDates={true} 
                            startDate={this.props.filters.startDate} 
                            endDate={this.props.filters.endDate} 
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calendarFocused} 
                            onFocusChange={this.onFocusChanged} 
                            numberOfMonths={1} 
                            isOutsideRange={() => false} />
                    </div>
                    <div className="in-group__item">
                    <select className="select" value={this.props.filters.sortBy} onChange={this.onSortChanged}>
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                    </select>
                    </div>
                    <div className="in-group__item search-box">
                        <input placeholder="Start typing to search expenses" 
                                className="text-input" 
                                type="text" 
                                value={this.props.filters.text} 
                                onChange={this.onTextChanged}/>
                    </div>
                    <div className="in-group__item">
                        <button className="btn" onClick={this.onChartClick}>
                        {/*Shows different button depending on filters chart state*/}
                            {!this.props.filters.chartToggle ? 
                                <span>Line Chart</span> : 
                                <span>Expense List</span>
                            }
                        </button>
                    </div>
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

const mapDispatchToProps = (dispatch) => ({
    sortByAmount: () => dispatch(sortByAmount()),
    sortByDate: () => dispatch(sortByDate()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    setChartToggle: (chartToggle) => dispatch(setChartToggle(chartToggle))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpListFilters);