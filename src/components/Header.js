import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const Header = () => (
    <header className="header">
    <div className="content">
        <div className="header__content">
            <NavLink to="/" className="header__title" exact={true}><h1>Pensey</h1></NavLink>
                <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
                <NavLink to="/FAQ" activeClassName="is-active">FAQ</NavLink>
        </div>
    </div>
    </header>
);

export default Header;