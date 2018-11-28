import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchResultsBegin} from '../actions/index';

export class SearchBarComponent extends Component {

  render() {
    const {onSubmit, searchCriteria} = this.props;
    console.log('search ', searchCriteria);
    return (
      <div className='search-bar'>
        <form 
          onSubmit={e => {
            e.preventDefault();
            onSubmit(e);
            console.log(e.target.querySelector('input').value);
          }}>
          <input type="text" placeholder='Search' />
          <input type="submit" value="Search"/>
        </form>
          <div>{searchCriteria}</div>
                
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    searchCriteria: state.searchReducer.searchCriteria
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (e)=> dispatch(fetchResultsBegin(e.target.querySelector('input').value))
  }
}

export default SearchBarComponent = connect(mapStateToProps, mapDispatchToProps)(SearchBarComponent);
