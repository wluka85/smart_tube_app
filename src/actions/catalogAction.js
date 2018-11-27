import {ThunkAction} from "redux-thunk";

const userCatalogsFetched = catalogs => ({
    type: "FETCH_CATALOGS_SUCCESS",
    catalogList: catalogs
});

const api = 'https://www.googleapis.com/youtube/v3/';
const urlSearchCatalogs = 'playlists?part=snippet&mine=true';

export const fetchUserCatalogs = () => (dispatch, getState) => {

    fetch(api + urlSearchCatalogs,  {
        method: 'GET',
        headers: new Headers({ 'Authorization': 'Bearer ' + encodeURIComponent(getState().authReducer.accessToken) })
    })
        .then((response) => response.json())
        .then((data) => dispatch(userCatalogsFetched(data)));
};