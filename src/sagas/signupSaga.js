import { put, call } from 'redux-saga/effects';
import * as types from '../actions/types'
import {firebaseSignup} from '../firebase/firebaseSignup'

export function* signupSaga(action) {
    try {
        const payload = yield call(firebaseSignup, action.email, action.password);
        yield put({ type: types.SIGNUP_USER_SUCCESS, payload });
    }
    catch(error) {
        yield put({ type: types.SIGNUP_USER_ERROR, error })
    }
}