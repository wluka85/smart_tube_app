import React, { Component } from 'react';
// import SearchBar from './components/searchBarComponent';
import AuthorizationComponent from './components/authorizationComponent';
import CatalogContainer from "./components/catalogComponent";
import {Redirect, Switch} from "react-router";
import {BrowserRouter, Route} from "react-router-dom";
import AppLoggedIn from "./AppLoggedIn";
import {fetchAddCatalog, fetchUserCatalogs} from "./actions/catalogAction";
import connect from "react-redux/es/connect/connect";


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
          {/*<SearchBar/>*/}
          <AuthorizationComponent/>
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
