import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import { api, options } from "../service/api";

export async function login(payload) {
  const { data } = await api.post("auth/login", payload);
  return data;
}

async function getUserAfterLogin() {
  options.headers = {
    Authorization: localStorage.getItem("token"),
  };

  const uniqueInstance = axios.create(options);

  const { data } = await uniqueInstance.get("/user");

  return data;
}

function* fetchLogin(action) {
  try {
    const payload = yield login(action.payload);
    yield put({ type: "LOGIN_SUCCESS", payload: payload.token });

    const userData = yield getUserAfterLogin();
    yield put({ type: "USER_DATA_SUCCESS", payload: userData });
  } catch (err) {
    yield put({ type: "LOGIN_FAIL", message: err });
  }
}

export function* watchLogin() {
  yield takeEvery("LOGIN_REQUEST", fetchLogin);
}
