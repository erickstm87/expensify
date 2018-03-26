import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });

    expect(action).toEqual({ //when testing on objects or arrays user needs to use toEqual instead of toBe
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should edit an expense on an object', () => {
    const edit = editExpense('145cde', {note: 'passedAnUpdate'});

    expect(edit).toEqual({
        type: 'EDIT_EXPENSE',
        id: '145cde',
        updates: {
            note: 'passedAnUpdate'
        }
    })
});

test('should setup add expense with provided values', () => {
    const action = addExpense(expenses[2]);

    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 123,
        note: 'this mouse is terrible',
        createdAt: 1000 
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
       }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0 
    };
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
       }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    });
});

// test('should setup add expense action object with default values', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             description: '', 
//             note: '', 
//             amount: 0, 
//             createdAt: 0,
//             id: expect.any(String)
//         }
//     })
// });