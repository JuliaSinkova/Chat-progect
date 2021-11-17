import {RESET_PASSWORD} from "./types";
export const resetPasswordAction = (email) => {
    return {
        type: RESET_PASSWORD,
        email
    }
};
