import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/authentication'

export const Header = ({ startLogout }) => (
    <header className="header">
    <div className="content">
        <div className="header__content">
                <NavLink to="/" className="header__title" exact={true}><h1>Pensey</h1></NavLink>
                    <div className="header__links">
                        <NavLink to="/create" className="header__links--link" activeClassName="is-active">Create Expense</NavLink>
                        <NavLink to="/create" className="header__links--link" activeClassName="is-active">Receipts</NavLink>
                        <NavLink to="/create" className="header__links--link" activeClassName="is-active">Trips</NavLink>
                        <NavLink to="/FAQ" className="header__links--link" activeClassName="is-active">FAQ</NavLink>
                        <button onClick={startLogout}>Logout</button>
                    </div>
        </div>
    </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});
export default connect(undefined, mapDispatchToProps)(Header);