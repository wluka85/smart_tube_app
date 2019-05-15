import { urlSearchCatalogs, addUserCatalogUrl, getDeleteUserCatalogUrl } from "../model/apiQueries";
import Playlist, { getCatalogs } from "../model/playlist";
import { userCatalogsFetched, addUserCatalogSuccess, addUserCatalogFailed, getUserCatalogsFailed, deleteUserCatalogSuccess } from '../actions/catalogAction';
import fetch from 'isomorphic-fetch';
import { call, put, takeEvery } from 'redux-saga/effects'

export function* getUserCatalogsData(dispatch, getState) {
  try {
    const response = yield call(fetch, urlSearchCatalogs, {
      method: 'GET',
      headers: new Headers({ 'Authorization': `Bearer ${getState().authReducer.accessToken}` })
    })
    const data = yield response.json();
    let catalogs = getCatalogs(data.items);
    yield put(userCatalogsFetched(catalogs))
  } catch {
    yield put(getUserCatalogsFailed('Error!'));
  }
}

export function* addUserCatalog(dispatch, getState, action) {
  try {
    const response = yield call(fetch, addUserCatalogUrl, {
      method: 'POST',
      headers: new Headers({ 'Authorization': `Bearer ${getState().authReducer.accessToken}`,
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'}),
      body: JSON.stringify({snippet: {
              "title": action.title,
              "description": action.description
          }
        })
      })
  
    const data = yield response.json();
    const { id, etag } = data;
    const { title, description, publishedAt } = data.snippet;
    const catalog = new Playlist(id, title, description, etag, publishedAt);
    yield put(addUserCatalogSuccess(catalog));
  } catch {
    yield put(addUserCatalogFailed('Error Playlist hasn\'t been added!'));
  }
}

export function* deleteUserCatalog(dispatch, getState, action) {
  try {
    const response = yield call(fetch, getDeleteUserCatalogUrl(action.playlistId), {
      method: 'DELETE',
      headers: new Headers({'Authorization': 'Bearer ' + encodeURIComponent(getState().authReducer.accessToken)})
    })
    if (response.status === 204) {
      const { catalogList } = getState().catalogReducer;
      let tempCatalogList = JSON.parse(JSON.stringify(catalogList));
      tempCatalogList = tempCatalogList.filter((element) => element.id !== action.playlistId);
      yield put(deleteUserCatalogSuccess(tempCatalogList));
    }
  } catch {

  }
}

export function* addUserCatalogSaga(dispatch, getState) {
  yield takeEvery('ADD_USER_CATALOG_REQUESTED', (action) => addUserCatalog(dispatch, getState, action));
}

export function* getUserCatalogsSaga(dispatch, getState) {
  yield takeEvery('GET_USER_CATALOGS_REQUESTED', () => getUserCatalogsData(dispatch, getState));
}

export function* deleteUserCatalogSaga(dispatch, getState) {
  yield takeEvery('DELETE_USER_CATALOG_REQUESTED', (action) => deleteUserCatalog(dispatch, getState, action));
}