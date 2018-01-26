

//Filter Text
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT',
    text
});

//Sort by amount
export const sortByAmount = () => ({
    type: 'SORT_AMOUNT'
});

//Sort by Date
export const sortByDate = () => ({
    type: 'SORT_DATE'
});

//Set the start Date
export const setStartDate = (startDate = 0) => ({
    type: 'START_DATE',
    startDate
});

//Set the End Date
export const setEndDate = (endDate) => ({
    type: 'END_DATE',
    endDate
});