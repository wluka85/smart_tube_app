import GoogleLogin from "react-google-login";
import React, { Component } from 'react'
// import '../../css/signIn.css';
import {connect} from 'react-redux';
import LogoutButton from "../view/components/logoutButton";
import {Redirect} from "react-router";
import {fetchUserCatalogs} from "../actions/catalogAction";

class AuthorizationComponent extends Component {

    render() {
        const { handleUserLogin, handleLoginFailure, handleUserLogout, message, accessToken, redirect, handleChangeRedirectState, handleDisplayCatalogs } = this.props;
        let googleButton;
        if (redirect) {
            handleChangeRedirectState();
            googleButton = <Redirect to='/log' push/>;
            handleDisplayCatalogs();


        } else if (accessToken.length === 0) {
            googleButton = <GoogleLogin id='sign-in-button'
                                        clientId="549983921860-7ctt7f0r7777vuir9e1pe3bj7p1siea6.apps.googleusercontent.com"
                                        buttonText="Sign In"
                                        scope="https://www.googleapis.com/auth/youtube"
                                        onSuccess={handleUserLogin}
                                        onFailure={handleLoginFailure}
            />;

        } else {
            googleButton = <LogoutButton actionOnLogout={handleUserLogout}/>;
        }

        return(
            <div className="sign-in-window">
                <div id="sign-in-container">
                    {googleButton}
                    <div id='sign-in-message'>{ message }</div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        accessToken: state.authReducer.accessToken,
        message: state.authReducer.message,
        redirect: state.authReducer.redirect
    };
}

const mapDispatchToProps = (dispatch) => {

    return {
        handleUserLogin: (response) => dispatch({type: 'USER_LOGGED_IN', message: '', accessToken: response.accessToken, redirect: true}),
        handleLoginFailure: () => dispatch({type: 'USER_NOT_LOGGED_IN', message: 'Ops! Wrong Login or Password'}),
        handleUserLogout: () => dispatch({type: 'USER_LOGGED_OUT', accessToken: '', message: ''}),
        handleChangeRedirectState: () => dispatch({type: 'USER_REDIRECTED', redirect: false}),
        handleDisplayCatalogs: () => dispatch(fetchUserCatalogs())
    };
};

export default AuthorizationComponent = connect(mapStateToProps, mapDispatchToProps)(AuthorizationComponent);