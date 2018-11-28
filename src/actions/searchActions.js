import {ThunkAction} from "redux-thunk";
import {getVideoList} from "../model/playlist";

export const fetchResultsBegin = (searchCriteria) => ({
  type: 'FETCH_RESULTS_BEGIN',
  searchCriteria
});

export const fetchResultsSuccess = (results) => ({
  type: 'FETCH_RESULTS_SUCCESS',
  items: results
});

export const fetchResultsError = (error) => ({
  type: 'FETCH_RESULTS_ERROR',
  error
});

export const fetchSearchResults = (searchCriteria) => (dispatch, getState) => {

  const API_KEY = 'AIzaSyBYOluBSrsLsqs0xGpRPueAUsOujDYdECc';
  const api = 'https://www.googleapis.com/youtube/v3/';
  const urlSearchResults = `search?part=snippet&q=${searchCriteria}&maxResults=10&type=video&key=${API_KEY}`;
  dispatch(fetchResultsBegin(searchCriteria));

  fetch(api + urlSearchResults,  {
    method: 'GET'
  })
    .then((response) => response.json())
    .then((data) => {
      const videoList = getVideoList(data.items);
      dispatch(fetchResultsSuccess(videoList));
      console.log('items are', getState().searchReducer.items);
  });
};