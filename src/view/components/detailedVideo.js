import React, { Component } from 'react';

export class DetailedVideo extends Component {

  constructor(props) {
    super();
    this.controller = props.controller;
    this.controller.model.attach(this);
    this.state = {
        loopVideo: 1,
        autoPlay: 1,
        disableKb: 1,
        chosenVideo: null,
        currentPlaylist: null
    };
  }

  handleUserUnselect = (event) => {
    if (event.target.className === 'modal') {
      this.controller.hideSelectedVideo();
    }
  }

  update(model) {
    this.setState({
      chosenVideo: model.chosenVideo,
        currentPlaylist: model.currentPlaylist
    });
  }

  renderEmpty() {
    return (
      <div></div>
    );
  }

  renderFull() {
    return (
      <div className='modal' onClick={(event) => this.handleUserUnselect(event)}>
        <div className="video-container">
          <div className="embed">
            <iframe className="embed-item video-window" src={this.url} title="video" allowFullScreen frameBorder="0" ></iframe>
          </div>
          <div className="details">
            <div>{this.state.chosenVideo.title}</div>
            <div>{this.state.chosenVideo.description}</div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    if (!this.state.chosenVideo) {
      return this.renderEmpty();
    } else {
      this.videoId = this.state.chosenVideo.videoId;
      console.log(this.state.currentPlaylist.id)
      this.url = `https://www.youtube.com/embed/
                  ${this.state.chosenVideo.videoId}?
                  autoplay=${this.state.autoPlay}&
                  loop=${this.state.loopVideo}&
                  playlist=${this.state.currentPlaylist.id}`;
      return this.renderFull();
    }
  }
}

export default DetailedVideo;