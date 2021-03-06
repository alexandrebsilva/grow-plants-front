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
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { ...state, loading: false, user: action.payload };
    case "USER_DATA_FAIL":
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}

export default user;
