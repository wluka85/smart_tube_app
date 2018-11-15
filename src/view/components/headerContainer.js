import React, { Component } from 'react';
import SearchBar from './searchBar';
import LogoutButton from './logoutButton';

export class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.controller = this.props.controller;
    this.controller.model.attach(this);
  }

  handleSearch(searchCriteria) {
      this.controller.searchVideo(searchCriteria);
  }

  handleLogout() {
    this.controller.accessToken = '';
    this.controller.model.isSignedIn = false;
    this.controller.model.detach(this);
    this.props.loadPageAction();

  }

  update(model) {
  }

  render() {
    return (
      <div id='header-container'>
        <div className='search-bar-container'>
          <SearchBar actionOnChange={this.handleSearch.bind(this)}/>
        </div>
        <div className='button-container'>
          <LogoutButton actionOnLogout={this.handleLogout.bind(this)}/>
        </div>
      </div>
    );
  }
}

export default HeaderContainer;
