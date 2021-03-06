// Search Filter using text (string) 
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// Sort by amount
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

// Sort by date
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// Sort by kilometres
export const sortByKm = () => ({
    type: 'SORT_BY_KM'
});

// Set the start date
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

// Set the end date
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});

// Chart switch
export const setChartToggle = (chartToggle) => ({
    type: 'SET_CHART_TOGGLE',
    chartToggle
});