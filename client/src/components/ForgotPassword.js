import { Fragment, React, useState } from "react";

function ForgotPassword() {
  const [email, setEmail] = useState("thong@gmail.com");
  return (
    <Fragment>
      <div className="containter h1 bg-secondary p-5 text-center">
        <h1>Reset Password</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <form className="mt-3">
              <div className="form-group mb-3">
                <label className="form-label text-center">Enter Your Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <button disabled={!email} className="btn btn-primary mb-2">
                Reset
              </button>
              <br />
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ForgotPassword;
