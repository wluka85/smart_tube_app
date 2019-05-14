import { urlSearchCatalogs } from "../model/apiQueries";
import { fetchCurrentPlaylist } from "../actions/playlistAction";
import { getCatalogs } from "../model/playlist";
import { userCatalogsFetched } from '../actions/catalogAction';
import fetch from 'isomorphic-fetch';
import { call, put, takeEvery } from 'redux-saga/effects'

export function* getUserCatalogsData(dispatch, getState) {
  try {
    const response = yield call(fetch, urlSearchCatalogs, {
      method: 'GET',
      headers: new Headers({ 'Authorization': 'Bearer ' + encodeURIComponent(getState().authReducer.accessToken) })
    })
    const data = yield response.json();
    let catalogs = getCatalogs(data.items);
            const currentPlaylist = getState().playlistReducer.currentPlaylist;
            yield [
              currentPlaylist ==='' && put(fetchCurrentPlaylist(catalogs[0])),
              put(userCatalogsFetched(catalogs))
            ]
  } catch {
    // TODO action for faild and case in reducer
  }
}

export function* getUserCatalogsSaga() {
  yield takeEvery('GET_USER_CATALOGS_REQUESTED', getUserCatalogsData);
}