import { all, call } from "redux-saga/effects";
import { watchLogin } from "./auth";
import { watchUser } from "./user";

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([call(watchLogin), call(watchUser)]);
}
