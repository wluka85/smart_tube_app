import { getUserCatalogsSaga, addUserCatalogSaga, deleteUserCatalogSaga } from "./catalogSagas";
import { all, fork } from 'redux-saga/effects'

export function* rootSaga(dispatch, getState) {
  yield all([
    fork(getUserCatalogsSaga, dispatch, getState),
    fork(addUserCatalogSaga, dispatch, getState),
    fork(deleteUserCatalogSaga, dispatch, getState),
  ]);
};