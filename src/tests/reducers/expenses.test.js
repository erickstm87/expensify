import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0],expenses[2]])
});

test('should not remove expense if id isn\'t found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: 90
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
});

test('should add an expense', () => {
    const newExpense = {
        id: '109',
        description: 'oatmeal',
        note: '',
        amount: '134',
        createdAt: 45
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, newExpense]);
});

test('should not edit and expense if not found', () => {
    const note = 'a new note'
    const action = {
        type: 'EDIT_EXPENSE',
        id: 1234,
        updates: {
            note
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].note).not.toBe(note);
});

test('should edit expenses', () => {
    const note = 'a new note'
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates: {
            note
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[0].note).toBe(note);
});