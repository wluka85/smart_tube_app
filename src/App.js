import React, { Component } from 'react';
// import SearchBar from './components/searchBarComponent';
import AuthorizationComponent from './components/authorizationComponent';
import CatalogContainer from "./components/catalogComponent";
import {Switch} from "react-router";
import {BrowserRouter, Route} from "react-router-dom";
import AppLoggedIn from "./AppLoggedIn";


export class App extends Component {
  render() {
        // console.log(this.props.store)
    return (
      <div id='container'>
        <h2 >Hello!</h2>
        <div id='header-container'>
          {/*<SearchBar/>*/}
          <AuthorizationComponent/>
        </div>
          {/*<CatalogContainer/>*/}
      </div>
    );
  }
}

export default App;
