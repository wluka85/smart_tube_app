import React, { Component } from 'react';
import {connect} from 'react-redux';
import ItemsListVideo from './itemsListVideoComponent';
import {openVideo} from '../actions/videoActions';


export class ItemsListComponent extends Component {

  renderItemsList () {
    const {items, handleOpenVideo } = this.props;
    return (
      <ul>
        {items.map(video => {
          return (
            <ItemsListVideo
              key={video.videoId}
              {...video}
              onClick = {() => handleOpenVideo(video)}
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

const mapStateToProps = (state) => {
  return {
    items: state.searchReducer.items
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleOpenVideo: (video) => {
      console.log(video);
      dispatch(openVideo(video))}
  }
};

export default ItemsListComponent = connect(mapStateToProps, mapDispatchToProps)(ItemsListComponent);
