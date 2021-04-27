const axios = require("axios");

let options = {
  baseURL: "https://grow-plants-api.herokuapp.com/",
  timeout: 10000,
};
if (localStorage.getItem("token")) {
  options.headers = {
    Authorization: localStorage.getItem("token"),
  };
}
const instance = axios.create(options);

export default instance;
