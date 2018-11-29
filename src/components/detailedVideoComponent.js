import React, { Component } from 'react';
import { connect } from 'react-redux';

class DetailedVideoComponent extends Component {

  // constructor(props) {
  //   super();
  //   this.controller = props.controller;
  //   this.controller.model.attach(this);
  //   this.state = {
  //       loopVideo: 1,
  //       autoPlay: 1,
  //       disableKb: 1,
  //       chosenVideo: null,
  //       currentPlaylist: null,
  //       typeContentToPlayInPlayer: null,
  //       titleContent: '',
  //       descriptionContent: ''
  //   };
  // }

  // handleUserUnselect = (event) => {
  //   if (event.target.className === 'modal') {
  //     this.controller.hideSelectedVideo();
  //   }
  // }

  // update(model) {
  //   let title ='';
  //   let description = '';
  //   if (model.typeContentToPlayInPlayer==='video') {
  //     title = model.chosenVideo.title;
  //     description = model.chosenVideo.description;
  //   } else if (model.typeContentToPlayInPlayer==='playlist') {
  //       title = model.currentPlaylist.title;
  //       description = model.currentPlaylist.description;
  //   }
  //   this.setState({
  //     chosenVideo: model.chosenVideo,
  //       currentPlaylist: model.currentPlaylist,
  //       typeContentToPlayInPlayer: model.typeContentToPlayInPlayer,
  //       titleContent: title,
  //       descriptionContent: description.substring(0, 200)
  //   });
  // }

  renderEmpty() {
    return (
      <div></div>
    );
  }

  renderFull() {
    const { title, description} = this.props;
    return (
      <div className='modal' >
        <div className="video-container">
          <div className="embed">
            <iframe className="embed-item video-window" src={this.url} title="video" allowFullScreen frameBorder="0" ></iframe>
          </div>
          <div className="details">
            <div>{title}</div>
            <div>{description}</div>
          </div>
        </div>
      </div>
    );
  }

  render() {
      console.log('entered render video');
      const {videoId, playlistElementId, showVideo} = this.props;
      if (!videoId && showVideo || !showVideo) {
          return this.renderEmpty();

      } else if (!playlistElementId && showVideo) {
          const API_KEY = 'AIzaSyBYOluBSrsLsqs0xGpRPueAUsOujDYdECc';
          this.url = `https://www.youtube.com/embed/${videoId}`;

      }

      return this.renderFull();

  }
}

const mapStateToProps = (state) => {
  return {
    videoId: state.videoReducer.videoId,
    title: state.videoReducer.title,
    description: state.videoReducer.description,
    showVideo: state.videoReducer.showVideo
  }
};

export default DetailedVideoComponent = connect(mapStateToProps)(DetailedVideoComponent);