import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import { setText, setTextFilter } from './actions/filters';
import { Provider } from 'react-redux';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';

const store = configureStore();
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expense, state.filters);
let hasRendered = false;
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

//console.log(store.getState());

ReactDOM.render(<p>Loading . . .</p>, document.getElementById('app')); 


firebase.auth().onAuthStateChanged((user) => {
    if(user){
        store.dispatch(startSetExpenses()).then(() => {
            renderApp();     
            if(history.location.pathname === '/'){
                history.push('/dashboard');
            }
        });
    }
    else
    {
        renderApp();
        history.push('/');
    }
});