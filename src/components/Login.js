import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/authentication'


// LOGIN COMPONENT { GOOGLE AUTH }
export const Login = ({ startLogin }) => (
    <div>
        <button onClick={startLogin}>Login</button>
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