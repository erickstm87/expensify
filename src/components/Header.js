import React from 'react';
import { Switch, BrowserRouter, Route, Link, NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to='/' activeClassName='is-active' exact> [Dashboard] </NavLink>
        <NavLink to='/create' activeClassName='is-active'> [Add Expense] </NavLink>
    </header>
);

export default Header;