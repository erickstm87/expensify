import uuid from 'uuid';
import database from '../firebase/firebase';

// Old Way ----
// component calls action generator
// action generator returns object
// component dispatches object
// redux store changes

// New Way with Firebase ---
// component calls action generator
// action generator returns function
// component dispatches function (?)
// function runs (has the ability to dispatch other actions and do whatever it wants)

//Add Expense
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpenses = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData;
    };
    const expense = {description, note, amount, createdAt};
    database.ref('expenses').push(expense).then((ref) => {
        dispatch(addExpense({
            id: ref.key,
            ...expense
        }));
    });
};

//Remove Expense
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//Edit Expense
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});