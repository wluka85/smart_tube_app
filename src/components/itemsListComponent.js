import React, { Component } from 'react';
import {connect} from 'react-redux';
import ItemsListVideo from './itemsListVideoComponent';
import {openVideo} from '../actions/videoActions';


export class ItemsListComponent extends Component {

  renderItemsList () {
    const {items} = this.props;
    return (
      <ul>
        {items.map(video => {
          return (
            <ItemsListVideo
              key={video.videoId}
              {...video}
              onClick = {() => openVideo(video)}
            />
          );
        })}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.renderItemsList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.searchReducer.items
  }
};

export default ItemsListComponent = connect(mapStateToProps)(ItemsListComponent);
