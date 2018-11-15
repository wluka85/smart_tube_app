import React, { Component } from 'react';
import ItemsListVideo from './itemsListVideo';

export class ItemsList extends Component {

  constructor(props) {
    super(props);
    this.controller = this.props.controller;
    this.controller.model.attach(this);
    this.state = {
      videos: []
    }
  }

  update(model) {
    this.setState({
      videos: model.videos
    });
  }

  handleUserSelect(video) {
    this.controller.showSelectedVideo(video);
  }

  renderItemsList () {
    return (
      <ul>
        {this.state.videos.map(video => {
          return (
            <ItemsListVideo
              key={video.etag}
              video={video}
              onUserSelected = {this.handleUserSelect.bind(this)}
            />
          );
        })}
      </ul>
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

export default ItemsList;
