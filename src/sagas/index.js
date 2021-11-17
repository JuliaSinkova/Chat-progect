import { all } from "redux-saga/effects";
import watchUserAuthentication from "./watchers";
import { loginSaga } from "./loginSaga";
import { signupSaga } from "./signupSaga";
import { resetPasswordSaga } from "./resetPasswordSaga";
import { loginSocialNetworksSaga } from "./loginSocialNetworksSaga";
import { logoutSaga } from "./logoutSaga";

export default function* index() {
  yield all([
    loginSaga,
    signupSaga,
    resetPasswordSaga,
    loginSocialNetworksSaga,
    logoutSaga,
    watchUserAuthentication(),
  ]);
}
