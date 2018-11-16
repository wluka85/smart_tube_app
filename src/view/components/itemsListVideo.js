import React, { Component } from 'react';

export class itemsListVideo extends Component {

  constructor(props) {
    super(props);
    this.video = this.props.video;
    this.onUserSelected = this.props.onUserSelected;
    this.onUserAddToPlaylist = this.props.onUserAddToPlaylist;
    this.imageUrl = this.video.snippet.thumbnails.default.url;
  }

  render() {
    return (
      <div>
        <div>
          <li onClick={() => this.onUserSelected(this.video)} className="list-group-item">
            <div className="video-list media">
              <div className="media-left">
                <img src={this.imageUrl} alt={this.video.snippet.title} className="media-object"/>
              </div>
              <div className="media-body">
                <div className="media-heading">{this.video.snippet.title}</div>
              </div>
              <div>
                <button className='add-to-playlist-button'
                  onClick={(event) => this.onUserAddToPlaylist(this.video.etag, event)}>Add to playlist</button>
              </div>
            </div>
          </li>
        </div>
      </div>
    );
  }
}

export default itemsListVideo;
