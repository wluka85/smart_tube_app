import { getUserCatalogsSaga } from "./catalogSagas";
import { all, fork } from 'redux-saga/effects'

export function* rootSaga(dispatch, getState) {
  yield all([
    fork(getUserCatalogsSaga, dispatch, getState)
  ]);
}