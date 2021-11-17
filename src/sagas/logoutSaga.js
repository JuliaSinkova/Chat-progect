import { put, call } from "redux-saga/effects";
import { LOGOUT_USER_SUCCESS, LOGOUT_USER_ERROR } from "../actions/types";
import { firebaseLogout } from "../firebase/firebaseLogout";

export function* logoutSaga() {
  try {
    const payload = yield call(firebaseLogout);
    yield put({ type: LOGOUT_USER_SUCCESS, payload });
  } catch (error) {
    yield put({ type: LOGOUT_USER_ERROR, error });
  }
}
