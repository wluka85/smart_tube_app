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

export const deleteUserCatalogRequested = (playlistId) => ({
    type: 'DELETE_USER_CATALOG_REQUESTED',
    playlistId,
});

export const deleteUserCatalogSuccess = (catalogList) => ({
    type: 'DELETE_USER_CATALOG_SUCCESS',
    catalogList,
});

export const deleteUserCatalogFailed = (errorMessage) => ({
    type: 'DELETE_USER_CATALOG_FAILED',
    errorMessage,
});
