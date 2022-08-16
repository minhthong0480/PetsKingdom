//import all pages
import Login from "./auth/Login";
import Home from "./components/Home";
import Register from "./auth/Register";
import Navbar from "./components/Navbar";
import MyAccount from "./components/MyAccount";
import ForgotPassword from "./components/ForgotPassword";
import UserDashboard from "./user/UserDashboard";
import UserDashboardPet from "./user/UserDashboardPet";
import UserBooking from "./booking/Userbooking";

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
        <Route exact path="/forgot-password" element={<ForgotPassword />} />

        {/* code for private route */}
        <Route element={<PrivateRoute />}>
          <Route exact path="user/dashboard" element={<UserDashboard />} />
          <Route
            exact
            path="user/dashboard/pet"
            element={<UserDashboardPet />}
          />
          <Route exact path="/user/booking" element={<UserBooking />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

  // )
}

export default App;
