import React, { Component } from 'react';
import { connect } from 'react-redux';
import {closeVideo} from '../actions/videoActions';

class DetailedVideoComponent extends Component {

  renderEmpty() {
    return (
      <div></div>
    );
  }

  renderFull() {
    const { title, description, handleCloseVideo } = this.props;
    return (
      <div className='modal' onClick={() => handleCloseVideo()}>
        <div className="video-container">
          <div className="embed">
            <iframe className="embed-item video-window" src={this.url} title="video" allowFullScreen frameBorder="0" ></iframe>
          </div>
          <div className="details">
            <div>{title}</div>
            <div>{description.slice(0,200)}</div>
          </div>
        </div>
      </div>
    );
  }

  isNotVideoChosen(showVideo) {
    return !showVideo;
  }

  isPlaylistChosen(playlistId, showVideo) {
      return (playlistId !== '') && showVideo;
  }

  render() {
    const { videoId, showVideo, playlistId } = this.props;
    
    if (this.isPlaylistChosen(playlistId, showVideo)) {
        this.url = `http://www.youtube.com/embed?listType=playlist&list=${playlistId}`;
        return this.renderFull();
    } else if (this.isNotVideoChosen(showVideo)) {
        return null;
    } 
    this.url = `https://www.youtube.com/embed/${videoId}`;
    return this.renderFull();
  }
}

const mapStateToProps = (state) => {
  return {
    videoId: state.videoReducer.videoId,
    title: state.videoReducer.title,
    description: state.videoReducer.description,
    showVideo: state.videoReducer.showVideo,
    isLoggedIn: state.authReducer.accessToken,
    playlistId: state.videoReducer.playlistId
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleCloseVideo: () => dispatch(closeVideo())
  }
};

export default DetailedVideoComponent = connect(mapStateToProps, mapDispatchToProps)(DetailedVideoComponent);