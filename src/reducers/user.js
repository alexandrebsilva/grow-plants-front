const initialState = {
  user: localStorage.getItem("user") || {},
  loading: false,
  error: null,
};

function user(state = initialState, action) {
  switch (action.type) {
    case "USER_DATA_REQUEST":
      return { ...state, loading: true };
    case "USER_DATA_SUCCESS":
      return { ...state, loading: false, user: action };
    case "USER_DATA_FAIL":
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}

export default user;
