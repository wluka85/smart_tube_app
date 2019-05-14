import { getUserCatalogsSaga } from "./catalogSagas";

export function* rootSaga() {
  yield [
    getUserCatalogsSaga()
  ];
}