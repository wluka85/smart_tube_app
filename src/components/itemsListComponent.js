import React, { Component } from 'react';
import {connect} from 'react-redux';
import ItemsListVideoComponent from './itemsListVideoComponent';
import {openVideo} from '../actions/videoActions';
import {fetchAddToPlaylist} from "../actions/playlistAction";


export class ItemsListComponent extends Component {

  renderItemsList () {
    const {items, handleOpenVideo, handleAddToPlaylist } = this.props;
    return (
      <ul>
        {items.map(video => {
          return (
            <ItemsListVideoComponent
              key={video.videoId}
              {...video}
              onClick = {() => handleOpenVideo(video)}
              addToPlaylistAction={() => handleAddToPlaylist(video)}
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

const mapDispatchToProps = (dispatch) => {
  return {
    handleOpenVideo: (video) => {
      console.log(video);
      dispatch(openVideo(video))},

    handleAddToPlaylist: (video) => {
      dispatch(fetchAddToPlaylist(video))}

  }
};

export default ItemsListComponent = connect(mapStateToProps, mapDispatchToProps)(ItemsListComponent);
