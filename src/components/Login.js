import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/authentication'


// LOGIN COMPONENT { GOOGLE AUTH }
export const Login = ({ startLogin }) => (
    <div className="boxed">
        <div className="boxed__center">
            <div className="boxed__text">
                <h1>Pensey</h1>
                <p className="boxed__text--title">Manage all your expenses.</p>
                <button className="btn btn__large" onClick={startLogin}>Login using Google Account</button>
            </div>
        </div>
    </div>
);

// STATELESS COMPONENT SO DOESNT NEED ACCESS TO ANYTHING STATE RELATED
// SO NO MAPSTATE TOPROPS

// DISPATCH Login
const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

// CONNECT REDUX
// UNDEFINED WHEN NO STATE ***
export default connect(undefined, mapDispatchToProps)(Login);