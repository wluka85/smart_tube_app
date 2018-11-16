import React, { Component } from 'react';

export class SearchBar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.actionOnChange = props.actionOnChange;
  // }

  onChangeHandler = (event) => {
    // this.handleSearch(event.target.value);
    this.props.actionOnChange(event.target.value);
  }

  render() {
    return (
      <div className='search-bar'>
        <input type="text"
          onChange={this.onChangeHandler}
          placeholder='Search' />        
      </div>
    );
  }
}

export default SearchBar;
