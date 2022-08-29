import moment from "moment";
import React, { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { userPets } from "../action/pet";
import { DatePicker, Select } from "antd";
import UserBookingForm from "../components/forms/UserBookingForm";
import { useNavigate } from "react-router-dom";

function Userbooking() {
  const [pets, setPets] = useState([]);
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;
  const { Option } = Select;
  const navigate = useNavigate();

  const { RangePicker } = DatePicker;

  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < moment().subtract(1, "days");
  };

  useEffect(() => {
    loadAllPets();
  }, []);

  // const {auth} = useSelector((state) => ({...state}))

  const loadAllPets = async () => {
    let res = await userPets(auth.token);
    setPets(res.data);
  };

  return (
    <Fragment>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h2>Add Booking</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <br />
            {UserBookingForm()}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Userbooking;
