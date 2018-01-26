import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';


const expensesReducerDefaultState = [];

const expenseReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
          return [...state, action.expense];
        case 'REMOVE_EXPENSE':
          return state.filter(({id}) => id !== action.id );
        case 'EDIT_EXPENSE':
          return state.map((expense) => {
              if(expense.id === action.id){
                return{
                    ...expense,
                    ...action.updates
                }
              }
              else{
                  return expense;
              }
          })
        default: 
          return state;
    }
};

//Add Expense
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

//Remove Expense
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//Edit Expense
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

//Filter Text
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT',
    text
});

//Sort by amount
const sortByAmount = () => ({
    type: 'SORT_AMOUNT'
});

//Sort by Date
const sortByDate = () => ({
    type: 'SORT_DATE'
});

//Set the start Date
const setStartDate = (startDate = 0) => ({
    type: 'START_DATE',
    startDate
});

//Set the End Date
const setEndDate = (endDate) => ({
    type: 'END_DATE',
    endDate
});



const filterReducer = (state = filterReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT':
          return {
              ...state,
              text: action.text
          };
        case 'SORT_AMOUNT':
          return {
              ...state,
              sortBy: 'amount'
          };
        case 'SORT_DATE':
          return {
              ...state,
              sortBy: 'date'
          };
        case 'START_DATE':
          return{
              ...state,
              startDate: action.startDate
          };
        case 'END_DATE':
          return{
              ...state,
              endDate: action.endDate
          }
        default:
          return state;
    }
};

const getVisibleExpenses = (expense, { text, sortBy, startDate, endDate}) => {
    return expense.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;            
        }
        else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

const store = createStore(
    combineReducers({
        expense: expenseReducer,
        filters: filterReducer
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expense, state.filters);
    console.log(visibleExpenses);    
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -5000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000 }));
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

//store.dispatch(setTextFilter('t'));
// store.dispatch(setTextFilter());

 store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(125));
// store.dispatch(setEndDate(32));
// store.dispatch(setStartDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setEndDate(9999));

const demoState = {
    expenses: [{
        id: 'anewid',
        description: 'Rent for the  month',
        note: 'keep paying rent keep paying rent',
        amount: 84000,  //this is in pennies
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
}

let person = {
    age: 30,
    name: 'sally'
}

console.log(
    {
        ...person,
        age: 31,
        location: 'philly'
    });

console.log(person);