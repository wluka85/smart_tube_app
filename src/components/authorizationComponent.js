import GoogleLogin from "react-google-login";
import React, { Component } from 'react';
import {connect} from 'react-redux';
import LogoutButton from "../view/components/logoutButton";
import {fetchUserCatalogs} from "../actions/catalogAction";
import {handleDisplayMessage} from "../actions/messageComponentActions";

class AuthorizationComponent extends Component {

    render() {
        const { handleUserLogin, handleLoginFailure, handleUserLogout, message, accessToken } = this.props;
        let googleButton;

            if (accessToken.length === 0) {
            googleButton = <GoogleLogin className="btn btn-outline-primary"
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
                <React.Fragment>
                    <div id='sign-in-message'>{ message }</div>
                    {googleButton}
                </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        accessToken: state.authReducer.accessToken,
        message: state.authReducer.message,
    };
}

const mapDispatchToProps = (dispatch) => {

    return {
        handleUserLogin: (response) => {
            console.log(response)
            dispatch({type: 'USER_LOGGED_IN', message: '', accessToken: response.accessToken, redirect: '/log'});
            dispatch(fetchUserCatalogs());
        },
        handleLoginFailure: () => dispatch(handleDisplayMessage('Ops! Wrong Login or Password')),
        handleUserLogout: () => dispatch({type: 'USER_LOGGED_OUT', accessToken: '', message: '', redirect: '/'}),
    };
};

export default AuthorizationComponent = connect(mapStateToProps, mapDispatchToProps)(AuthorizationComponent);