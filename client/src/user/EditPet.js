import { Fragment, React, useState, useEffect } from "react";
import { useParams, useMatch } from "react-router-dom";
import { toast } from "react-toastify";
import { DatePicker, Select } from "antd";
import "antd/dist/antd.css";
import { read } from "../action/pet";
import { useSelector } from "react-redux";
import PetCreateForm from "../components/forms/PetCreateForm";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const EditPet = ({}) => {
  let match = useMatch("/user/edit-pet/:petId");
  //   console.log(params)
  let params = useParams();
  
  useEffect(() => {
      // console.log(params);
      // console.log(match.params);
      loadUserPet();
    });
    
    const loadUserPet = async () => {
    let res = await read(match.useParams);
    console.log(res);
  };

  return (
    <Fragment>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h2>Edit User Pet</h2>
      </div>
    </Fragment>
  );
};

export default EditPet;
