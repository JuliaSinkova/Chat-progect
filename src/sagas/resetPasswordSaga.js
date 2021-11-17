import { put, call } from 'redux-saga/effects';
import {RESET_PASSWORD_SUCCESS, RESET_PASSWORD_ERROR, RESET_PASSWORD_ERROR_MESSAGE, RESET_PASSWORD_SUCCESS_MESSAGE} from '../actions/types';
import {firebaseResetPassword} from '../firebase/firebaseResetPassword';
import {toast} from "react-toastify";

const notifySuccess = () => toast.success("Ссылка для восстановления пароля отправлена вам на почту!");
const notifyError = () => toast.error("Ой! Что-то пошло не так=(");

export function* resetPasswordSaga(action) {
    try {
        const payload = yield call(firebaseResetPassword, action.email);
        yield put({ type: RESET_PASSWORD_SUCCESS, payload });
        const messageSuccess = yield call(notifySuccess)
        yield put({ type: RESET_PASSWORD_SUCCESS_MESSAGE, messageSuccess });
    }
    catch(error) {
        yield put({ type: RESET_PASSWORD_ERROR, error });
        const messageError = yield call(notifyError);
        yield put({ type: RESET_PASSWORD_ERROR_MESSAGE, messageError });

    }
}