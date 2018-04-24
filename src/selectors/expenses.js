import moment from 'moment'

export default (expenses, { text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const createdAtTime = moment(expense.createdAt); // get created at datetime
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtTime, 'day') : true; // ternary op - true/false
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtTime, 'day') : true; // ternary op - true/false
        //const textMatch = expense.title.toLowerCase().includes(text.toLowerCase());

        // return startDateMatch && endDateMatch && textMatch;
        return startDateMatch && endDateMatch;
    }).sort((a,b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1; // ascending or descending sort order
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};