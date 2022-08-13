import React from "react";
import { useState, useEffect } from "react";
import RegisterForm from "../components/RegisterForm";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.table({ name, email, password });
    try {
      const res = await axios.post(`http://localhost:4000/api/user/register`, {
        name: name,
        email: email,
        password: password,
      });
      console.log("REGISTER USER ===> ", res);
      //create popup for successful login
      toast.success("Register successfully. Back to Login page in 5 second", {hideAfter: 4});
      //redirect to login page in 3s
      setTimeout(() => {
        navigate('/login')
      }, 5000)
    } catch (error) {
      console.log(error);
      if (error.response.status === 400) {
        //create popup for error
        toast.error(error.response.data);
      }
    }
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
