import { put, takeEvery } from "redux-saga/effects";
import { api } from "../service/api";

export async function getUser() {
  const response = await api.get("/user");
  return response.data;
}

function* fetchUser(action) {
  try {
    const payload = yield getUser(action.payload);
    yield put({ type: "USER_DATA_SUCCESS", user: payload });
  } catch (err) {
    yield put({ type: "USER_DATA_FAIL", message: err.message });
  }
}

export function* watchUser() {
  yield takeEvery("USER_DATA_REQUEST", fetchUser);
}
