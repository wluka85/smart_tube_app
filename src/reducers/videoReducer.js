const initialState = {
  videoId: '',
  imageURL: '',
  title: '',
  showVideo: false
};

const videoReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'VIDEO_CLICKED':
      return {
        ...state,
        videoId: action.videoId,
        imageURL: action.imageURL,
        title: action.title,
        showVideo: true
      };
    case 'VIDEO_CLOSED':
      return {
        ...state,
        showVideo: false
      }
    default:
      return state;
  }
}

export default videoReducer;