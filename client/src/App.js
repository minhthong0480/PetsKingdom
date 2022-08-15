//import all pages
import Login from "./auth/Login";
import Home from "./components/Home";
import Register from "./auth/Register";
import Navbar from "./components/Navbar";
import MyAccount from "./components/MyAccount";
import Dashboard from "./user/UserDashboard";

//import dependencies
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute";
import Redirect from "./components/Redirect";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ToastContainer position="top-center" autoClose={3000} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/redirect" element={<Redirect />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/myaccount" element={<MyAccount />} />
        <Route exact path="/register" element={<Register />} />
        <Route
          exact
          path="/dashboard"
          element={
            <PrivateRoute>
              <PrivateRoute />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );

  // )
}

export default App;
