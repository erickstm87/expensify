import { setStartDate, 
         setEndDate, 
         sortByDate, 
         sortByAmount, 
         setTextFilter 
        } from '../../actions/filters';
import moment from 'moment';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'END_DATE',
        endDate: moment(0)
    });
});

test('should sort by date', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_DATE'
    });
});

test('should sort by amount', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_AMOUNT'
    });
});

test('should filter text by input', () => {
    const action = setTextFilter('input');
    expect(action).toEqual({
        type: 'SET_TEXT',
        text: 'input'
    });
});

test('should resort to empty string if no filter is provided', () => {
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT',
        text: ''
    });
});