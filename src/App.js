import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import AuthRoute from "./components/AuthRoute";
import NavBar from "./components/NavBar";
import "./index.css";
import Home from "./pages/home";
import LandPage from "./pages/LandPage";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  const state = useSelector((state) => state);
  console.warn("GLOBAL STATE", state);
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Switch>
          <AuthRoute path="/login" type="public">
            <Login />
          </AuthRoute>
          <AuthRoute path="/register" type="public">
            <Register />
          </AuthRoute>
          <AuthRoute path="/home" type="private">
            <Home />
          </AuthRoute>
          <AuthRoute exact path="/" type="public">
            <LandPage />
          </AuthRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
