import React, { Component } from 'react';
import SearchBarComponent from './searchBarComponent';
import AuthorizationComponent from './authorizationComponent';
import '../css/mainWindow.css';

export class HeaderContainer extends Component {

  render() {
    return (
      <div id='header-container'>
        <div className='search-bar-container'>
          <SearchBarComponent />
        </div>
        <div className='button-container'>
          <AuthorizationComponent/>
        </div>
      </div>
    );
  }
}

export default HeaderContainer;
