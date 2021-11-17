import {LOGIN_SOCIAL_NETWORKS} from "./types";
export const loginSocialNetworksAction = (provider) => {
    return {
        type: LOGIN_SOCIAL_NETWORKS,
        provider
    }
};