import React, { Component } from 'react';
import SearchBarComponent from './searchBarComponent';
import AuthorizationComponent from './authorizationComponent';

export class HeaderContainer extends Component {

  render() {
    return (
      <nav className="navbar navbar-light bg-light fixed-top">
          <div className="text-primary" style={{fontFamily: 'Pacifico', fontWeight: 'cursive', fontSize: '25px'}}>SmartTube</div>
          <SearchBarComponent />
          <AuthorizationComponent/>
      </nav>
    );
  }
}

export default HeaderContainer;
