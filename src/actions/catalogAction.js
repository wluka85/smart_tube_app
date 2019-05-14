import {getCatalogs} from "../model/playlist";
import JSON from "circular-json";
import {fetchCurrentPlaylist} from "./playlistAction";

export const getUserCatalogsRequested = () => ({
    type: 'GET_USER_CATALOGS_REQUESTED'
})
export const userCatalogsFetched = catalogs => ({
    type: "FETCH_CATALOGS_SUCCESS",
    catalogList: catalogs
});

const api = 'https://www.googleapis.com/youtube/v3/';

export const fetchAddCatalog = (title, description) => (dispatch, getState) => {

    fetch(api + 'playlists?part=snippet', {
        method: 'POST',
        headers: new Headers({ 'Authorization': 'Bearer ' + encodeURIComponent(getState().authReducer.accessToken),
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'}),
        body: JSON.stringify({snippet: {
                "title": title,
                "description": description
            }
        })

    })
        .then((response) => response.json())
        .then(() => {
            dispatch({type: 'SHOW_ADD_NEW_CATALOG', showAddNewCatalogWindow: false});
            // dispatch(fetchUserCatalogs());
        })
};

export const deleteCatalog = (playlistId) => (dispatch, getState) => {
    fetch(api+ 'playlists?id=' + playlistId, {
        method: 'DELETE',
        headers: new Headers({'Authorization': 'Bearer ' + encodeURIComponent(getState().authReducer.accessToken)})
    })
        .then(response => {
            // dispatch(fetchUserCatalogs());
        })

}