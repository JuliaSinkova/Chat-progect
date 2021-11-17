import { call, put } from "redux-saga/effects";
import * as types from "../actions/types";
import { firebaseLoginSocialNetworks } from "../firebase/firebaseLoginSocialNetworks";

export function* loginSocialNetworksSaga(action) {
  try {
    const payload = yield call(firebaseLoginSocialNetworks, action.provider);
    yield put({ type: types.LOGIN_SOCIAL_NETWORKS_SUCCESS, payload });
  } catch (error) {
    yield put({ type: types.LOGIN_SOCIAL_NETWORKS_ERROR, error });
  }
}
