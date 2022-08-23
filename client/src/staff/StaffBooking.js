import React, { Fragment } from "react";

function StaffBooking() {
  const StaffBookingForm = () => {
      
    <select class="form-select" aria-label="Default select example">
    <option selected>Open this select menu</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>
    
  };

  return (
    <Fragment>
      <div>Staff Booking</div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <br />
            {StaffBookingForm()}
          </div>
          
        </div>
      </div>
    </Fragment>
  );
}

export default StaffBooking;
