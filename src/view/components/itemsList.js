import React, { Component } from 'react';

export class itemsList extends Component {


  render() {
    return (
      <div>
        <p>{this.props.searchResults}</p>
      </div>
    );
  }
}

export default itemsList;
