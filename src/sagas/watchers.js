import {
  LOGIN_USER,
  RESET_PASSWORD,
  SIGNUP_USER,
  LOGIN_SOCIAL_NETWORKS,
  LOGOUT_USER,
} from "../actions/types";
import { takeLatest } from "redux-saga/effects";
import { loginSaga } from "./loginSaga";
import { signupSaga } from "./signupSaga";
import { resetPasswordSaga } from "./resetPasswordSaga";
import { loginSocialNetworksSaga } from "./loginSocialNetworksSaga";
import { logoutSaga } from "./logoutSaga";

export default function* watchUserAuthentication() {
  yield takeLatest(LOGIN_USER, loginSaga);
  yield takeLatest(SIGNUP_USER, signupSaga);
  yield takeLatest(RESET_PASSWORD, resetPasswordSaga);
  yield takeLatest(LOGIN_SOCIAL_NETWORKS, loginSocialNetworksSaga);
  yield takeLatest(LOGOUT_USER, logoutSaga);
}
