import React, { Component } from 'react';
import SearchBar from './searchBar';
import ItemsList from './itemsList';

export class appPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
      searchCriteria: ''
    }
  }

  render() {
    console.log(this.state.searchCriteria);
    return (
      <div>
        <SearchBar onInputChange = {userInput => this.setState({searchCriteria: userInput})}/>
        <ItemsList 
          searchResults = {this.state.searchCriteria}
          onUserSelected = {(selectedItem => this.setState({selectedVideo: selectedItem}))}
        />    
      </div>
    );
  }
}

export default appPage;
