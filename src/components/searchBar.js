import React, { Component } from 'react';

export class SearchBar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.actionOnChange = props.actionOnChange;
  // }

  onChangeHandler = (event) => {
    if (event.key === 'Enter') {
      this.props.actionOnChange(event);
    }
  }

  render() {
    return (
      <div className='search-bar'>
        <input type="text"
          onKeyDown={this.onChangeHandler}
          placeholder='Search' />        
      </div>
    );
  }
}

export default SearchBar;
