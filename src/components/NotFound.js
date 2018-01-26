import React from 'react';
import { Switch, BrowserRouter, Route, Link, NavLink} from 'react-router-dom';

const NotFound = () => (
    <div>
        404 NOT FOUND! - <Link to='/'>Home</Link>
    </div>
);

export default NotFound;