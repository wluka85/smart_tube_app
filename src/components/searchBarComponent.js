import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchSearchResults} from '../actions/searchActions';

export class SearchBarComponent extends Component {

  render() {
    const {onSubmit, searchCriteria} = this.props;
    console.log('search ', searchCriteria);
    return (
      <div >
        <form className='search-bar' class="input-group mb-3"
          onSubmit={e => {
            e.preventDefault();
            onSubmit(e);
            e.target.querySelector('input').value = '';
          }} className='form-container'>
          <input className='search-input' className="form-control" type="text" placeholder='Search'/>
          <div className="input-group-append">
            <input className='button-submit' className="btn btn-outline-secondary" type="submit" value="Search"/>
          </div>
        </form>
                
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchCriteria: state.searchReducer.searchCriteria,
    items: state.searchReducer.items
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (e)=> dispatch(fetchSearchResults(e.target.querySelector('input').value))
  }
}

export default SearchBarComponent = connect(mapStateToProps, mapDispatchToProps)(SearchBarComponent);
