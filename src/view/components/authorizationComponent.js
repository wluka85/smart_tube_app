import GoogleLogin from "react-google-login";
import React, { Component } from 'react'
// import '../../css/signIn.css';

export default class AuthorizationComponent extends Component {
    constructor(props) {
        super();
        this.controller = props.controller;
        this.controller.model.attach(this);
        this.loadPage = props.loadPageAction;
        this.state = {
            message: ""
        }
    }

    render() {
        return(
            <div id="sign-in-container">
                <GoogleLogin id='sign-in-button'
                    clientId="549983921860-7ctt7f0r7777vuir9e1pe3bj7p1siea6.apps.googleusercontent.com"
                    buttonText="Sign In"
                    scope="https://www.googleapis.com/auth/youtube"
                    onSuccess={this.handleSingIn.bind(this)}
                    onFailure={this.handleOnFailure.bind(this)}
                />
                <div id='sign-in-message'>{ this.state.message }</div>
            </div>
        )
    }

    handleSingIn(response) {
        this.controller.singIn(response.accessToken);
    }

    handleOnFailure() {
        this.controller.prepareFailureSignInMessage();
    }

    update(model) {
        if (!model.isSignedIn) {
            this.setState({message: model.message});

        } else {
            model.detach(this);
            this.loadPage();
        }
    }
}