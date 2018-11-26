import React, { Component } from 'react';

export class SearchBar extends Component {
  // constructor(props) {
  //   super(props);
  //   this.actionOnChange = props.actionOnChange;
  // }

  onChangeHandler = (event) => {
    const e = event.target.value;
    setTimeout(() => {this.props.actionOnChange(e);}, 1000);
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
