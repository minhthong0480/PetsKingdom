import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../action/auth";
import { useDispatch, useSelector } from "react-redux";
import MyAccountForm from "../components/forms/MyAccountForm";

const MyAccount = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const { auth } = useSelector((state) => ({ ...state }));
  const { user } = auth;
//   console.log(user);

  const [values, setValues] = useState({
    name: user?.name,
    email: user?.email,
    password: user?.password,
  });

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.table({ name, email, password });
    dispatch(register(values, navigate));
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>My Account</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <MyAccountForm
              handleSubmit={handleSubmit}
              values={values}
              handleChange={handleChange}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default MyAccount;
