import React, { Fragment } from "react";

function Userbooking() {
  const bookingForm = () => {
      
      <form>
        <div className="form-group">
          <label className="btn btn-primary">
              <input type="file" name='image' />
          </label>
        </div>
      </form>
    
  };

  return (
    <Fragment>
      <div>User Booking</div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <br />
            {bookingForm()}
          </div>
          
        </div>
      </div>
    </Fragment>
  );
}

export default Userbooking;
