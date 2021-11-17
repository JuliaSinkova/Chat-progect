import { put, call } from "redux-saga/effects";
import * as types from "../actions/types";
import { firebaseLogin } from "../firebase/firebaseLogin";

export function* loginSaga(action) {
  try {
    const payload = yield call(firebaseLogin, action.email, action.password);
    yield put({ type: types.LOGIN_USER_SUCCESS, payload });
  } catch (error) {
    yield put({ type: types.LOGIN_USER_ERROR, error });
  }
}
