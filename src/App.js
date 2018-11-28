import React, { Component } from 'react';
import SearchBarComponent from './components/searchBarComponent';
import AuthorizationComponent from './components/authorizationComponent';
import ItemsListComponent from './components/itemsListComponent';
import DetailedVideoComponent from './components/detailedVideoComponent';


export class App extends Component {
  render() {
    return (
      <div id='container'>
        <h2 >Hello!</h2>
        <div id='header-container'>
          <SearchBarComponent/>
          <AuthorizationComponent/>
          <div id="video-list-container">
            <ItemsListComponent/>
            <DetailedVideoComponent/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
