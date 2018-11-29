const initialState = {
  videoId: null,
  description: '',
  title: '',
  showVideo: false,
  playlistId: ''
};

const videoReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'VIDEO_ITEM_CLICKED':
      return {
        ...state,
        videoId: action.videoId,
        description: action.description,
        title: action.title,
        showVideo: true
      };
    case 'VIDEO_CLOSED':
      return {
        ...state,
        showVideo: false,
        title: '',
        description: '',
        playlistId: '',
        videoId: null
      };


    case 'PLAYLIST_PLAYBACK_CHOSEN':
      return {
        ...state,
        showVideo: true,
        description: action.description,
        title: action.title,
        playlistId: action.playlistId
      };

    default:
      return state;
  }
}

export default videoReducer;