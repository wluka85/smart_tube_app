import {ThunkAction} from "redux-thunk";
import Playlist, {getCatalogs} from "../model/playlist";
import JSON from "circular-json";
import {getVideoList} from "../model/video";

const currentPlaylistFetched = currentPlaylist => ({
    type: "FETCH_PLAYLIST_SUCCESS",
    currentPlaylist: currentPlaylist
});

const playlistVideosFetched = videoList => ({
    type: "FETCH_VIDEOS_SUCCESS",
    videoList: videoList
});

const api = 'https://www.googleapis.com/youtube/v3/';
const urlSearchCatalogs = 'playlists?part=snippet&mine=true';
const urlCurrentPlaylist = 'playlistItems?part=snippet&maxResults=10&playlistId='

export const fetchCurrentPlaylist = (playlist) => (dispatch, getState) => {

    fetch(api + urlCurrentPlaylist + playlist.id,  {
        method: 'GET',
        headers: new Headers({ 'Authorization': 'Bearer ' + encodeURIComponent(getState().authReducer.accessToken) })
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            dispatch(currentPlaylistFetched(playlist));
            dispatch(playlistVideosFetched(getVideoList(data.items)));
        });
};