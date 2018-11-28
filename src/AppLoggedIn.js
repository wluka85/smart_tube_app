import React, { Component } from 'react';
// import SearchBar from './components/searchBarComponent';
import AuthorizationComponent from './components/authorizationComponent';
import CatalogContainer from "./components/catalogComponent";
import CatalogCreatorComponent from "./components/catalogCreatorComponent";
import {Redirect} from "react-router";
import connect from "react-redux/es/connect/connect";


export class AppLoggedIn extends Component {
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
          <CatalogContainer/>
          <CatalogCreatorComponent/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        redirect: state.authReducer.redirect
    };
}


export default AppLoggedIn = connect(mapStateToProps)(AppLoggedIn);
