import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setText, setTextFilter } from './actions/filters';
import { Provider } from 'react-redux';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 45000}));
store.dispatch(addExpense({description: 'gas bill', createdAt: 1000, amount: 50}));
//store.dispatch(setTextFilter('water'));
store.dispatch(addExpense({description: 'rent', amount: 85000, createdAt: 1200}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expense, state.filters);

console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app')); 
//ReactDOM.render(<User name='tomas' age={30}/>, document.getElementById('app')); 