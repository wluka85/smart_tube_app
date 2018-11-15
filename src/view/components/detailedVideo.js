import React, { Component } from 'react';

export class DetailedVideo extends Component {

  constructor(props) {
    super();
    this.controller = props.controller;
    this.controller.model.attach(this);
    this.state = {
      chosenVideo: null
    };
  }

  update(model) {
    this.setState({
      chosenVideo: model.chosenVideo,

    });
  }

  renderEmpty() {
    return (
      <div className="video-detail col-md-7">
        <div className="embedresponsive embedresponsive-16by9">
          <p>Here is the player's place</p>
        </div>
      </div>
    );
  }

  renderFull() {
    return (
      <div className="video-detail col-md-7">
        <div className="embedresponsive embedresponsive-16by9">
          <p>Here is the player's place</p>
          <iframe className="embed-responsive-item video-window" src={this.url} title="video" allowFullScreen frameBorder="0" ></iframe>
        </div>
        <div className="details">
          <div>{this.state.chosenVideo.snippet.title}</div>
          <div>{this.state.chosenVideo.snippet.description}</div>
        </div>
      </div>
    );
  }

  render() {
    if (!this.state.chosenVideo) {
      return this.renderEmpty();
    } else {
      this.videoId = this.state.chosenVideo.id.videoId;
      this.url = `https://www.youtube.com/embed/${this.videoId}`;
      return this.renderFull();
    }
  }
}

export default DetailedVideo;