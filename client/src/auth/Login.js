import React, { Fragment } from "react";

const Login = () => {
  return (
    <Fragment>
      <div className="containter h1 bg-secondary p-5 text-center">
        <h1>Login Page</h1>
      </div>
      <div className="container">
        <form className="form-group text-center">
          <div className="row mb-3 justify-content-center">
            <label for="inputEmail3" className="col-sm-1 form-label">
              Email
            </label>
            <div className="col-sm-5">
              <input type="email" className="form-control" id="inputEmail3" />
            </div>
          </div>
          <div className="row mb-3 justify-content-center">
            <label for="inputPassword3" className="col-sm-1 form-label">
              Password
            </label>
            <div className="col-sm-5">
              <input
                type="password"
                className="form-control"
                id="inputPassword3"
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Sign in
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Login;
