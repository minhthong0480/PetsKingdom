import React, { Fragment, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { allPets, userPets } from "../action/pet";

function Userbooking() {
  const [pets, setPets] = useState([]);
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;

  useEffect(() => {
    loadAllPets();
  }, []);

  // const {auth} = useSelector((state) => ({...state}))

  const loadAllPets = async () => {
    let res = await userPets(auth.token);
    setPets(res.data);
  };

  const UserBookingForm = () => {
    return (
      <select class="form-select" aria-label="Default select example">
        {pets.map((pet) => (
          <option value={pet._id}>{pet.petname}</option>
        ))}
      </select>
    );
  };

  return (
    <Fragment>
      <div>User Booking</div>
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
