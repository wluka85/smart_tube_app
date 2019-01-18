import React, { Component } from 'react';
import { GoogleLogout } from 'react-google-login';

export class LogoutButton extends Component {

  constructor(props) {
    super(props);
    this.container = this.props.container;
  }

  clickHandler = () => {
    this.props.actionOnLogout();
  }

  render() {
    return (
      <React.Fragment>
        <GoogleLogout className="btn btn-outline-primary"
          buttonText="Logout"
          onLogoutSuccess={this.clickHandler}>
        </GoogleLogout>
      </React.Fragment>
    );
  }
}

export default LogoutButton;

    