const initialState = {
  videoId: '',
  description: '',
  title: '',
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
        showVideo: true
      };
    case 'VIDEO_CLOSED':
      return {
        ...state,
        showVideo: false,
        title: '',
        description: '',
        videoId: ''
      }
    default:
      return state;
  }
}

export default videoReducer;