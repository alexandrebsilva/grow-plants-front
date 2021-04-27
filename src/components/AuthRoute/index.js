import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

const AuthRoute = (props) => {
  const auth = useSelector((state) => state.auth);
  const { type } = props;

  if (type === "private" && !auth.token) {
    return <Redirect to="/login" />;
  } else if (type === "public" && auth.token) {
    return <Redirect to="home" />;
  }

  return <Route {...props} />;
};

export default AuthRoute;
