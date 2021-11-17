import {SIGNUP_USER} from "./types";
export const signupAction = (email, password) => {
    return {
        type: SIGNUP_USER,
        email,
        password
    }
};
