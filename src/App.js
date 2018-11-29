import React, { Component } from 'react';
import SearchBarComponent from './components/searchBarComponent';
import AuthorizationComponent from './components/authorizationComponent';
import {Redirect} from "react-router";
import connect from "react-redux/es/connect/connect";
import ItemsListComponent from './components/itemsListComponent';
import HeaderContainer from './components/headerContainer';
// import './css/headerStyles.css';
import './css/mainWindow.css';

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
            <HeaderContainer/>
          {/* <SearchBarComponent/>
          <AuthorizationComponent/> */}
          <div id="video-list-container">
            <ItemsListComponent/>
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
