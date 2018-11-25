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
        currentPlaylist: null,
        typeContentToPlayInPlayer: null,
        titleContent: '',
        descriptionContent: ''
    };
  }

  handleUserUnselect = (event) => {
    if (event.target.className === 'modal') {
      this.controller.hideSelectedVideo();
    }
  }

  update(model) {
    let title ='';
    let description = '';
    if (model.typeContentToPlayInPlayer==='video') {
      title = model.chosenVideo.title;
      description = model.chosenVideo.description;
    } else if (model.typeContentToPlayInPlayer==='playlist') {
        title = model.currentPlaylist.title;
        description = model.currentPlaylist.description;
    }
    this.setState({
      chosenVideo: model.chosenVideo,
        currentPlaylist: model.currentPlaylist,
        typeContentToPlayInPlayer: model.typeContentToPlayInPlayer,
        titleContent: title,
        descriptionContent: description.substring(0, 200)
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
            <div>{this.state.titleContent}</div>
            <div>{this.state.descriptionContent}</div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    if (!this.state.typeContentToPlayInPlayer) {
      return this.renderEmpty();

    } else if (this.state.typeContentToPlayInPlayer === 'video'){
      this.videoId = this.state.chosenVideo.videoId;
      this.url = `https://www.youtube.com/embed/${this.state.chosenVideo.videoId}?autoplay=${this.state.autoPlay}&loop=${this.state.loopVideo}&playlist=${this.state.chosenVideo.videoId}`;
      return this.renderFull();
    } else if (this.state.typeContentToPlayInPlayer === 'playlist') {
      this.url = `http://www.youtube.com/embed?autoplay=${this.state.autoPlay}&loop=${this.state.loopVideo}&listType=playlist&list=${this.state.currentPlaylist.id}`
        return this.renderFull();
    }
  }
}

export default DetailedVideo;