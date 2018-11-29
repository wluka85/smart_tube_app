import React from 'react';
import {connect} from 'react-redux';

const itemsListVideo = ({onClick, title, imageURL, videoId, addToPlaylistAction, accessToken}) => {
  return (
    <div key={videoId}>
      <li onClick={onClick} className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img src={imageURL} alt={title} className="media-object"/>
          </div>
          <div className="media-body">
            <div className="media-heading">{title}</div>
          </div>
          <div>
            {createAddToPlaylistButton(addToPlaylistAction, accessToken)}
          </div>
        </div>
      </li>
    </div>
  );
}

const createAddToPlaylistButton = (addToPlaylistAction, accessToken) => {
    if(accessToken.length > 0) {
        return (
            <button className='add-to-playlist-button'
                  onClick={addToPlaylistAction}>Add to playlist</button>
        )
    }
    return (
        <button className='add-to-playlist-button' disabled
              onClick={addToPlaylistAction}>Add to playlist</button>
    )
}

export default itemsListVideo;


// export default itemsListVideo = connect(mapStateToProps)(itemsListVideo);
