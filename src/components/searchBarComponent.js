import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getSearchResultsRequested } from '../actions/searchActions';

export class SearchBarComponent extends Component {

  render() {
    const { onSubmit } = this.props;
    return (
      <div className="">
        <form className="form-inline w-100"
          onSubmit={e => {
            e.preventDefault();
            onSubmit(e);
            e.target.querySelector('input').value = '';
          }}>
          <input className="form-control mr-sm-2" type="text" placeholder='Search'/>
          <input className="btn btn-outline-primary my-2 my-sm-0" type="submit" value="Search"/>
        </form>
                
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.searchReducer.items
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (e)=> dispatch(getSearchResultsRequested(e.target.querySelector('input').value))
  }
}

export default SearchBarComponent = connect(mapStateToProps, mapDispatchToProps)(SearchBarComponent);
