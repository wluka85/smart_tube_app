import React, { Component } from 'react';
import {Redirect} from "react-router";
import connect from "react-redux/es/connect/connect";
import ItemsListComponent from './components/itemsListComponent';
import HeaderContainer from './components/headerContainer';
import withLoading from "./components/hoc/withLoading";
import DetailedVideoComponent from "./components/detailedVideoComponent";
const DetailedVideoComponentWithLoading = withLoading(DetailedVideoComponent)

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
            <HeaderContainer/>
            <div id="row">
                <ItemsListComponent/>
            </div>
          <DetailedVideoComponentWithLoading/>
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
