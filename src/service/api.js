import { useSelector } from "react-redux";
import axios from "axios";

export let options = {
  baseURL: "https://grow-plants-api.herokuapp.com/",
  timeout: 10000,
};
if (localStorage.getItem("token")) {
  options.headers = {
    Authorization: localStorage.getItem("token"),
  };
}
export const api = axios.create(options);
