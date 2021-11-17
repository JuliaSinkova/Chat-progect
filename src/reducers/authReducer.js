import {
  LOGIN_SOCIAL_NETWORKS,
  LOGIN_SOCIAL_NETWORKS_ERROR,
  LOGIN_SOCIAL_NETWORKS_SUCCESS,
  LOGIN_USER,
  LOGIN_USER_ERROR,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  LOGOUT_USER_ERROR,
  LOGOUT_USER_SUCCESS,
  SIGNUP_USER,
  SIGNUP_USER_ERROR,
  SIGNUP_USER_SUCCESS,
} from "../actions/types";

const INITIAL_STATE = {
  error: null,
  token: null,
  user: null,
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_USER || SIGNUP_USER || LOGIN_SOCIAL_NETWORKS:
      return { ...state, token: null, user: null };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.user.uid,
        error: null,
      };
    case LOGIN_SOCIAL_NETWORKS_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.user.uid,
        error: null,
      };
    case SIGNUP_USER_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.user.uid,
        error: null,
      };

    case LOGIN_USER_ERROR:
      return { ...state, error: action.error };
    case LOGIN_SOCIAL_NETWORKS_ERROR:
      return { ...state, error: action.error };
    case SIGNUP_USER_ERROR:
      return { ...state, error: action.error };

    case LOGOUT_USER:
      return { ...state };

    case LOGOUT_USER_SUCCESS:
      return {
        ...state,
        token: null,
        user: null,
      };

    case LOGOUT_USER_ERROR:
      return { ...state };

    default:
      return state;
  }
};

export default authReducer;
