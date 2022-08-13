import React, { Fragment } from "react";
import { toast } from "react-toastify";
import { login } from "../action/auth";
import {Link} from 'react-router-dom'

const Login = () => {
  return (
    <Fragment>
      <div className="containter h1 bg-secondary p-5 text-center">
        <h1>Login Page</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="form-check      ">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" for="exampleCheck1">
                  Remember Me
                </label>
              </div>
              <button type="submit" className="btn btn-primary mt-2 mb-2">
                Submit
              </button><br />
              <Link to='/' className="stretched-link">Forgot Password?</Link>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
