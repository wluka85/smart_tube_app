import React, { Component } from 'react';

export class DetailedVideo extends Component {

  constructor(props) {
    super();
    this.controller = props.controller;
    this.controller.model.attach(this);
    this.state = {
      chosenVideo: null
    };
    this.videoId = this.state.chosenVideo.id.videoId;
    this.url = `https://www.youtube.com/embed/${this.videoId}`;
  }

  update(model) {
    console.log('video player', this.state.chosenVideo);
    this.setState({chosenVideo: model.chosenVideo})
    console.log('video player', this.state.chosenVideo);
  }

  render() {
    console.log('detailed')
    return (
      <div className="video-detail col-md-7">
        <div className="embedresponsive embedresponsive-16by9">
          <p>Here is the player's place</p>
          {/* <iframe className="embed-responsive-item video-window" src={this.url} title="video" allowFullScreen frameBorder="0" ></iframe> */}
        </div>
        <div className="details">
          {/* <div>{this.state.chosenVideo.snippet.title}</div>
          <div>{this.state.chosenVideo.snippet.description}</div> */}
        </div>
        
      </div>
    );
  }
}

export default DetailedVideo;
