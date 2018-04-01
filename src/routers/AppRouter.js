import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Switch, Router, Route, Link, NavLink} from 'react-router-dom';
import ExpenseDashboardPage from '../components/HomePage';
import AddExpensePage from '../components/AddExpense';
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage';
import NotFound from '../components/NotFound';
import Header from '../components/Header';
import LoginPage from '../components/LoginPage';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
            <div>
                <Header />
                <Switch>
                    <Route path='/' component={LoginPage} exact={true}/>
                    <Route path='/dashboard' component={ExpenseDashboardPage}/>
                    <Route path='/create' component={AddExpensePage}/>
                    <Route path='/edit/:id' component={EditExpensePage}/>
                    <Route path='/help' component={HelpPage}/>
                    <Route component={NotFound}/>
                </Switch>  
            </div> 
    </Router>
);
 
export default AppRouter;