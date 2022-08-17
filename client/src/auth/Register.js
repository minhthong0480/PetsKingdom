import React from "react";
import { useState } from "react";
import RegisterForm from "../components/RegisterForm";
import { useNavigate } from "react-router-dom";
import { register } from "../action/auth";
import { useDispatch } from "react-redux";

const Register = () => {
  const [name, setName] = useState("thong");
  const [email, setEmail] = useState("thongdemo@gmail.com");
  const [password, setPassword] = useState("1234");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.table({ name, email, password });
    dispatch(register({name, email, password}, navigate))
  };

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>Register</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <RegisterForm
              handleSubmit={handleSubmit}
              name={name}
              email={email}
              password={password}
              setName={setName}
              setEmail={setEmail}
              setPassword={setPassword}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
