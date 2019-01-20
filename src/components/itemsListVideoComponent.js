import React from 'react';

const itemsListVideo = ({onClick, title, imageURL, videoId, addToPlaylistAction, accessToken}) => {
  return (
      <div key={videoId} className="card item-result" onClick={onClick}>
            <img src={imageURL} alt={title} className="card-img-top img-responsive" style={{width: 'auto', height: '140px'}}/>
          <div className="media-body">
            <div className="card-title text-center">{title}</div>
          </div>
          <div>
            {createAddToPlaylistButton(addToPlaylistAction, accessToken)}
          </div>
      </div>
  );
}

const createAddToPlaylistButton = (addToPlaylistAction, accessToken) => {
    if(accessToken.length > 0) {
        return (
            <button className='btn btn-outline-primary btn-sm btn-sets'
                  onClick={addToPlaylistAction}>Add to playlist</button>
        )
    }
    return (
        <button className='btn btn-outline-primary btn-sm btn-sets' disabled
              onClick={addToPlaylistAction}>Add to playlist</button>
    )
}

export default itemsListVideo;


// export default itemsListVideo = connect(mapStateToProps)(itemsListVideo);
