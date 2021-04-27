import types from "./types";

const login = (payload) => {
  return {
    type: types.LOGIN_REQUEST,
    payload,
  };
};

export default login;
