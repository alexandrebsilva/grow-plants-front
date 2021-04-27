import { put, takeEvery } from "redux-saga/effects";
import api from "../service/api";

export async function login(payload) {
  const response = await api.post("auth/login", payload);
  return response.data;
}

function* fetchLogin(action) {
  try {
    const payload = yield login(action.payload);
    yield put({ type: "LOGIN_SUCCESS", token: payload.token });
  } catch (err) {
    yield put({ type: "LOGIN_FAIL", message: err.message });
  }
}

export function* watchLogin() {
  yield takeEvery("LOGIN_REQUEST", fetchLogin);
}
