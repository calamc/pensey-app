// map all expenses into single expense then add
// this is for expense summary component

export default (expenses) => {
    return expenses.map((expense) => expense.amount).reduce((sum, value) => sum + value, 0);
};