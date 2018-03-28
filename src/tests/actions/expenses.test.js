import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { startAddExpense, 
         addExpense, 
         editExpense, 
         removeExpense, 
         setExpenses, 
         startSetExpenses, 
         startRemoveExpense,
         startEditExpense
        } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expenseData = {};
    expenses.forEach(({id, description, note, amount, createdAt}) => {
        expenseData[id] = { description, note, id, amount }
    });
    database.ref('expenses').set(expenseData).then(() => {
        done();
    })
});


test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' });

    expect(action).toEqual({ //when testing on objects or arrays user needs to use toEqual instead of toBe
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('should remove expense from firebase', (done) => {
    const store = createMockStore({});
    const id = expenses[2].id;
    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });
        return database.ref(`expenses/${id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
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

test('should edit an expense on firebase', (done) => {
    const store = createMockStore({});
    const id = expenses[0].id;
    const updates = { amount: 21045}
    store.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        });
        return database.ref(`expenses/${id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val().amount).toEqual(updates.amount);
        done();
    });
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

test('should setup set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});
