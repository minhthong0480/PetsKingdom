import { Fragment, React, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [text, setText] = useState('')
  const [send, setSend] = useState(false)

  const handleSubmit = async(e) => {
    e.preventDefault();
    // const data = {
    //   email: this.email,
    // };
    setSend(true)
    try {
      await axios.post(`${process.env.REACT_APP_API}/send_mail`, {text}).then((res) => {
        console.log(res);
      });
    } catch (error) {
      if (e.response.status === 400) {
        toast.error(e.response.data);
      }
    }
  };
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="containter h1 bg-secondary p-5 text-center">
          <h1>Reset Password</h1>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <form className="mt-3">
                <div className="form-group mb-3">
                  <label className="form-label text-center">
                    Enter Your Email
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="name@example.com"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                </div>

                <button type = "submit" className="btn btn-primary mb-2">Reset</button>
                <br />
              </form>
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
}

export default ForgotPassword;
