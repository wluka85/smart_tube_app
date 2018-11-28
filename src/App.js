import React, { Component } from 'react';
import SearchBarComponent from './components/searchBarComponent';
import AuthorizationComponent from './components/authorizationComponent';
import CatalogContainer from "./components/catalogComponent";
import {Switch} from "react-router";
import {BrowserRouter, Route} from "react-router-dom";
import AppLoggedIn from "./AppLoggedIn";
import ItemsListComponent from './components/itemsListComponent';
import DetailedVideoComponent from './components/detailedVideoComponent';
// import './css/headerStyles.css';
// import './css/mainWindow.css';

export class App extends Component {
  render() {
        // console.log(this.props.store)
    return (
      <div id='container'>
        <h2 >Hello!</h2>
        <div id='header-container'>
          <SearchBarComponent/>
          <AuthorizationComponent/>
          <div id="video-list-container">
            <ItemsListComponent/>
            {/* <DetailedVideoComponent/> */}
          </div>
        </div>
          {/*<CatalogContainer/>*/}
      </div>
    );
  }
}

export default App;
