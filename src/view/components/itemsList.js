import React, { Component } from 'react';
import ItemsListVideo from './itemsListVideo';

export class itemsList extends Component {


  renderItemsList () {
    return (
      <ul>
        {this.props.video.map(video => {
          return (
            <ItemsListVideo
              key={video.etag}
              video={video}
              onUserSelected = {this.props.onUserSelected}
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

export default itemsList;
