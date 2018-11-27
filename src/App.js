import React, { Component } from 'react';
import SearchBarComponent from './components/searchBarComponent';
import AuthorizationComponent from './components/authorizationComponent';


export class App extends Component {
  render() {
    return (
      <div id='container'>
        <h2 >Hello!</h2>
        <div id='header-container'>
          <SearchBarComponent/>
          <AuthorizationComponent/>
        </div>
      </div>
    );
  }
}

export default App;
