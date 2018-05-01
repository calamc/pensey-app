import React from 'react'
import { connect } from 'react-redux'
import { startLogin, startFacebookLogin } from '../actions/authentication'


// LOGIN COMPONENT { GOOGLE AUTH }
export const Login = ({ startLogin, startFacebookLogin }) => (
    <div className="boxed">
        <div className="boxed__padding">
            <div className="boxed__center">
                <div className="boxed__text">
                    <h1 className="btn--h1">Pensey</h1>
                    <p className="boxed__text--title">Manage all of your expenses in one place.</p>
                    <button className="btn btn--login" onClick={startLogin}>
                    <img src="/img/google.png" className="btn--login_google" />
                    <span className="btn--login__text">Login using your Google Account</span></button>
                    <button className="btn btn--login" onClick={startFacebookLogin}>
                    <img src="/img/facebook.png" className="btn--login_google" />
                    <span className="btn--login__text">Login using your Facebook Account</span></button>
                </div>
            </div>
        </div>
    </div>
);

// STATELESS COMPONENT SO DOESNT NEED ACCESS TO ANYTHING STATE RELATED
// SO NO MAPSTATE TOPROPS

// DISPATCH Login
const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin()),
    startFacebookLogin: () => dispatch(startFacebookLogin())
});

// CONNECT REDUX
// UNDEFINED WHEN NO STATE ***
export default connect(undefined, mapDispatchToProps)(Login);