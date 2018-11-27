import GoogleLogin from "react-google-login";
import React, { Component } from 'react'
// import '../../css/signIn.css';
import {connect} from 'react-redux';

class AuthorizationComponent extends Component {

    render() {
        const { handleUserLogin, handleLoginFailure, message } = this.props;
        return(
            <div className="sign-in-window">
                <div id="sign-in-container">
                    <GoogleLogin id='sign-in-button'
                        clientId="549983921860-7ctt7f0r7777vuir9e1pe3bj7p1siea6.apps.googleusercontent.com"
                        buttonText="Sign In"
                        scope="https://www.googleapis.com/auth/youtube"
                        onSuccess={handleUserLogin}
                        onFailure={handleLoginFailure}
                    />
                    <div id='sign-in-message'>Message: { message }</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('MSTP ', state.message);
    return {
        accessToken: state.accessToken,
        message: state.message
    };
}

const mapDispatchToProps = (dispatch) => {
    console.log('MDTP');
    return {
        handleUserLogin: () => dispatch({type: 'USER_LOGGED_IN'}),
        handleLoginFailure: () => dispatch({type: 'USER_NOT_LOGGED_IN'})
    };
};

export default AuthorizationComponent = connect(mapStateToProps, mapDispatchToProps)(AuthorizationComponent);