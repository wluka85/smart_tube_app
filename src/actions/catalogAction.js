export const getUserCatalogsRequested = () => ({
    type: 'GET_USER_CATALOGS_REQUESTED',
});

export const userCatalogsFetched = catalogs => ({
    type: "GET_USER_CATALOGS_SUCCESS",
    catalogList: catalogs,
});

export const getUserCatalogsFailed = (errorMessage) => ({
    type: 'GET_USER_CATALOGS_FAILED',
    errorMessage,
});

export const addUserCatalogRequested = (title, description) => ({
    type: 'ADD_USER_CATALOG_REQUESTED',
    title,
    description,
});

export const addUserCatalogSuccess = (userCatalog) => ({
    type: 'ADD_USER_CATALOG_SUCCESS',
    userCatalog,
});

export const addUserCatalogFailed = (errorMessage) => ({
    type: 'ADD_USER_CATALOG_FAILED',
    errorMessage,
});

const api = 'https://www.googleapis.com/youtube/v3/';

export const deleteCatalog = (playlistId) => (dispatch, getState) => {
    fetch(api+ 'playlists?id=' + playlistId, {
        method: 'DELETE',
        headers: new Headers({'Authorization': 'Bearer ' + encodeURIComponent(getState().authReducer.accessToken)})
    })
        .then(response => {
            // dispatch(fetchUserCatalogs());
        })

}