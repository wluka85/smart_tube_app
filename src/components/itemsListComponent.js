import React, { Component } from 'react';
import {connect} from 'react-redux';
import ItemsListVideoComponent from './itemsListVideoComponent';
import {openVideo} from '../actions/videoActions';
import {fetchAddToPlaylist} from "../actions/playlistAction";

export class ItemsListComponent extends Component {

  renderItemsList () {
    const {items, handleOpenVideo, handleAddToPlaylist, accessToken } = this.props;
    let componentClassName;
    accessToken.length > 0 ? componentClassName = "offset-sm-4 col-sm-8 col-md-6 offset-md-3 search-result" : componentClassName = "col-md-8 offset-md-2";

    return (
        <div className={componentClassName}>
          <div className="item-list">
          {items.map(video => {
            return (
              <ItemsListVideoComponent
                key={video.videoId}
                {...video}
                accessToken={accessToken}
                onClick = {() => handleOpenVideo(video)}
                addToPlaylistAction={(event) => {
                  event.stopPropagation();
                  handleAddToPlaylist(video)}}
              />
            );
          })}
        </div>
      </div>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.renderItemsList()}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.searchReducer.items,
    accessToken: state.authReducer.accessToken
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
