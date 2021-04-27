import types from "./types";

const getUser = () => {
  return {
    type: types.USER_DATA_REQUEST,
  };
};

export default getUser;
