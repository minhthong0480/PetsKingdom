import React, { Fragment, useState } from "react";
import { toast } from "react-toastify";
import { login } from "../action/auth";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <Fragment>
      <div className="containter h1 bg-secondary p-5 text-center">
        <h1>Login Page</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <LoginForm
              handleSubmit={handleSubmit}
              email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
