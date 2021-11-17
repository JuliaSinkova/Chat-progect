import { LOGIN_USER } from "./types";

export const loginAction = (email, password) => {
  return {
    type: LOGIN_USER,
    email,
    password,
  };
};
