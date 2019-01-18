import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchSearchResults} from '../actions/searchActions';

export class SearchBarComponent extends Component {

  render() {
    const {onSubmit, searchCriteria} = this.props;
    console.log('search ', searchCriteria);
    return (
      <div className="">
        <form className="form-inline w-100"
          onSubmit={e => {
            e.preventDefault();
            onSubmit(e);
            e.target.querySelector('input').value = '';
          }}>
          <input className="form-control mr-sm-2" type="text" placeholder='Search'/>
          {/*<div className="input-group-append">*/}
            <input className="btn btn-outline-primary my-2 my-sm-0" type="submit" value="Search"/>
          {/*</div>*/}
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
