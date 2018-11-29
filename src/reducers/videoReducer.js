const initialState = {
  videoId: null,
  description: '',
  title: '',
  playlistElementId: null,
  showVideo: false
};

const videoReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'VIDEO_ITEM_CLICKED':
      return {
        ...state,
        videoId: action.videoId,
        description: action.description,
        title: action.title,
        playlistElementId: action.playlistElementId,
        showVideo: true
      };
    case 'VIDEO_CLOSED':
      return {
        ...state,
        showVideo: false,
        playlistElementId: null,
        title: '',
        description: '',
        videoId: null
      }
    default:
      return state;
  }
}

export default videoReducer;