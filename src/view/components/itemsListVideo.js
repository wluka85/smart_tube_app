import React, { Component } from 'react';

export class itemsListVideo extends Component {


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
          <button className='delete-button'
            onClick={(event) => this.props.onUserDeleted(this.video.etag, event)}>Delete</button>
        </div>
      </div>
    </li>
      </div>
      </div>
    );
  }
}

export default itemsListVideo;
