import { getSearchResultsUrl } from "../model/apiQueries";
import { getVideoList } from "../model/playlist";
import fetch from 'isomorphic-fetch';
import { getSearchResultsSuccess, getSearchResultsFailed } from '../actions/searchActions';

import { call, put, takeEvery } from 'redux-saga/effects';

export function* getSearchResults(dispatch, getState, action) {
  try {
    const response = yield call(fetch, getSearchResultsUrl(action.searchCriteria),  {
      method: 'GET'
    })
    const data = yield response.json();
    const videoList = getVideoList(data.items);
    yield put(getSearchResultsSuccess(videoList));
  } catch {
    yield put(getSearchResultsFailed('Something went wrong (no search result)!'));
  }
}

export function* getSearchResultsSaga(dispatch, getState) {
  yield takeEvery('GET_SEARCH_RESULTS_REQUESTED', (action) => getSearchResults(dispatch, getState, action));
}