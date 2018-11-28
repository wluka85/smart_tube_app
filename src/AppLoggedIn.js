import React, { Component } from 'react';
// import SearchBar from './components/searchBarComponent';
import AuthorizationComponent from './components/authorizationComponent';
import CatalogContainer from "./components/catalogComponent";
import CatalogCreatorComponent from "./components/catalogCreatorComponent";


export class App extends Component {
  render() {
    return (
      <div id='container'>
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

export default App;
