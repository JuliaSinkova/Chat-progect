import {RESET_PASSWORD, RESET_PASSWORD_ERROR, RESET_PASSWORD_SUCCESS} from "../actions/types";

const INITIAL_STATE = {
    error: null,
    success: null

};

export const resetPasswordReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case RESET_PASSWORD:
            return {...state, error: null};

        case RESET_PASSWORD_SUCCESS:
            console.log('success');
            return {...state,  success: true};

        case RESET_PASSWORD_ERROR:
            console.log('error');
            return {...state,  error: action.error.message, success: false};

        default:
            return state;
    }
};

export default resetPasswordReducer;