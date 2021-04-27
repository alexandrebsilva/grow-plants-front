const initialState = {
  token: localStorage.getItem("token") || "",
  loading: false,
  error: null,
};

function auth(state = initialState, action) {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return { ...state, loading: true };
    case "LOGIN_SUCCESS":
      localStorage.setItem("token", `Bearer ${action.token}`);
      return { ...state, loading: false, token: action.token };
    case "LOGIN_FAIL":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default auth;
