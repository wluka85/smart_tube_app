const api = 'https://www.googleapis.com/youtube/v3/';
const API_KEY = 'AIzaSyBYOluBSrsLsqs0xGpRPueAUsOujDYdECc';
export const urlSearchCatalogs = `${api}playlists?part=snippet&maxResults=30&mine=true`;
export const addUserCatalogUrl = `${api}playlists?part=snippet`;
export const getDeleteUserCatalogUrl = (playlistId) => `${api}playlists?id=${playlistId}`;
export const getSearchResultsUrl = (searchCriteria) => `${api}search?part=snippet&q=${searchCriteria}&maxResults=30&type=video&key=${API_KEY}&safeSearch=strict`;