import React from 'react';

const itemsListVideo = ({onClick, title, imageURL, videoId, addToPlaylistAction}) => {
  return (
    <div key={videoId}>
      <li onClick={onClick} className="list-group-item">
        <div className="video-list">
          <div className="media-left">
            <img src={imageURL} alt={title} className="media-object"/>
          </div>
          <div className="media-body">
            <div className="media-heading">{title}</div>
          </div>
          <div>
            <button className='add-to-playlist-button'
              onClick={addToPlaylistAction}>Add to playlist</button>
          </div>
        </div>
      </li>
    </div>
  );
}

export default itemsListVideo;

// const mapStateToProps = state => {
//   return {
//     video: state.videoReducer.title,
//     imageURL: state.videoReducer.imageURL,
//     videoId: state.videoReducer.videoId
//   }
// };

// export default itemsListVideo = connect(mapStateToProps)(itemsListVideo);
