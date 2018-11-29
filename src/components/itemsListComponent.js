import React, { Component } from 'react';
import {connect} from 'react-redux';
import ItemsListVideoComponent from './itemsListVideoComponent';
import {openVideo} from '../actions/videoActions';
import {fetchAddToPlaylist} from "../actions/playlistAction";
import DetailedVideoComponent from './detailedVideoComponent';
import withLoading from './hoc/withLoading';

const DetailedVideoComponentWithLoading = withLoading(DetailedVideoComponent)
export class ItemsListComponent extends Component {

  renderItemsList () {
    const {items, handleOpenVideo, handleAddToPlaylist, accessToken } = this.props;
    return (
        <React.Fragment>
        <ul>
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
      </ul>
      <DetailedVideoComponentWithLoading/>
      </React.Fragment>
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
