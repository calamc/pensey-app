import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { startLogout } from '../actions/authentication'

export const Header = ({ startLogout }) => (
    <header className="header">
    <div className="content">
        <div className="header__content">
                <NavLink to="/dashboard" className="header__title"><h1>Pensey</h1></NavLink>
                    <div className="header__links">
                        <NavLink to="/create" className="header__links--link" activeClassName="is-active">Create Expense</NavLink>
                        <NavLink to="/analytics" className="header__links--link" activeClassName="is-active">Analytics</NavLink>
                        <span className="header__links--link">
                            <button className="btn__logout" onClick={startLogout}>Logout</button>
                        </span>
                    </div>
        </div>
    </div>
    </header>
);



const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});
export default connect(undefined, mapDispatchToProps)(Header);