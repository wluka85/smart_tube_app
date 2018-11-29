import React, { Component } from 'react';
import SearchBarComponent from './components/searchBarComponent';
import AuthorizationComponent from './components/authorizationComponent';
import CatalogContainer from "./components/catalogComponent";
import {Redirect, Switch} from "react-router";
import {BrowserRouter, Route} from "react-router-dom";
import AppLoggedIn from "./AppLoggedIn";
import {fetchAddCatalog, fetchUserCatalogs} from "./actions/catalogAction";
import connect from "react-redux/es/connect/connect";
import ItemsListComponent from './components/itemsListComponent';
import DetailedVideoComponent from './components/detailedVideoComponent';
// import './css/headerStyles.css';
// import './css/mainWindow.css';

export class App extends Component {
  render() {
      const {redirect} = this.props;

      let redirectElement = '';
      if (window.location.pathname !== redirect) {
          redirectElement = <Redirect to={redirect}/>
      }
    return (
      <div id='container'>
          {redirectElement}
        <h2 >Hello!</h2>
        <div id='header-container'>
          <SearchBarComponent/>
          <AuthorizationComponent/>
          <div id="video-list-container">
            <ItemsListComponent/>
            <DetailedVideoComponent/>
          </div>
        </div>
          {/*<CatalogContainer/>*/}
      </div>
    );
  }
}


const mapStateToProps = (state) => {
    return {
        redirect: state.authReducer.redirect
    };
}


export default App = connect(mapStateToProps)(App);
