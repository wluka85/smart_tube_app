import React, { Component } from 'react';
import CatalogContainer from "./components/catalogComponent";
import CatalogCreatorComponent from "./components/catalogCreatorComponent";
import {Redirect} from "react-router";
// import connect from "react-redux/es/connect/connect";
import {connect} from 'react-redux';
import ItemsListComponent from "./components/itemsListComponent";
import PlaylistComponent from "./components/playlistComponent";
import HeaderContainer from './components/headerContainer';
import './css/headerStyles.css';
import './css/mainWindow.css';


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
          <HeaderContainer/>
          <div className="row">
              <CatalogContainer/>
              <ItemsListComponent/>
              <PlaylistComponent/>
          </div>
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
