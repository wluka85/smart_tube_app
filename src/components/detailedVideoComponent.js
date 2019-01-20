import React, { Component } from 'react';
import { connect } from 'react-redux';
import {closeVideo} from '../actions/videoActions';
import Modal from "react-bootstrap/es/Modal";


class DetailedVideoComponent extends Component {

  renderFull() {
    const { title, description, handleCloseVideo, showVideo } = this.props;

    return (
      <Modal show={showVideo} onHide={handleCloseVideo} animation={false} bsSize="large">
            <Modal.Header>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <iframe className="embed-item video-window container-fluid" src={this.url} title="video" allowFullScreen frameBorder="0" width="420" height="500" />
            </Modal.Body>
            <Modal.Footer>
              <p>{description.slice(0,200)}</p>
            </Modal.Footer>
      </Modal>
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
        this.url = `https://www.youtube.com/embed?listType=playlist&list=${playlistId}`;
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