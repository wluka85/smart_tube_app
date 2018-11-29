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
// const urlSearchCatalogs = 'playlists?part=snippet&mine=true';
const urlCurrentPlaylist = 'playlistItems?part=snippet&maxResults=10&playlistId='

export const fetchCurrentPlaylist = (playlist) => (dispatch, getState) => {

    fetch(api + urlCurrentPlaylist + playlist.id,  {
        method: 'GET',
        headers: new Headers({ 'Authorization': 'Bearer ' + encodeURIComponent(getState().authReducer.accessToken) })
    })
        .then((response) => response.json())
        .then((data) => {
            dispatch(currentPlaylistFetched(playlist));
            dispatch(playlistVideosFetched(getVideoList(data.items)));
        });
};

export const fetchDeletePlaylistItem = (playlistElementId, playlist) => (dispatch, getState) => {
    fetch(api + 'playlistItems?id=' + playlistElementId, {
        method: 'DELETE',
        headers: new Headers({'Authorization': 'Bearer ' + encodeURIComponent(getState().authReducer.accessToken) })
    })
        .then(() => {
            dispatch(fetchCurrentPlaylist(playlist));
        })
};

export const fetchAddToPlaylist = (video) => (dispatch, getState) => {
    const currentPlaylist = getState().playlistReducer.currentPlaylist;
    fetch('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet', {
        method: 'POST',
        headers: new Headers({ 'Authorization': 'Bearer ' + encodeURIComponent(getState().authReducer.accessToken), 'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'}),
        body: JSON.stringify({"snippet": {
                "playlistId": currentPlaylist.id,
                "resourceId": {
                    "kind": "youtube#video",
                    "videoId": video.videoId
                }
            }
        })

    })
        .then((response) => {
            dispatch(fetchCurrentPlaylist(currentPlaylist));
        })
};