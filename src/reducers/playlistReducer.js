const initialState = {
    currentPlaylist: '',
    videoList: []
};

const playlistReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'FETCH_PLAYLIST_SUCCESS':
            return {...state,  currentPlaylist: action.currentPlaylist};

        case 'FETCH_VIDEOS_SUCCESS':
            return {...state, videoList: action.videoList};

        default:
            return state;
    }

};

export default playlistReducer;