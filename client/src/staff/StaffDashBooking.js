import { Fragment } from "react";
import StaffDashNav from "../components/StaffDashNav";
import { Link } from "react-router-dom";

const UserDashBooking = () => {
  return (
    <Fragment>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>Staff Dashboard</h1>
      </div>
      <div className="container-fluid p-4">
        <StaffDashNav />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <h2>Booking Invoice</h2>
          </div>
          <div className="col-md-2">
            <Link to="/user/booking" className="btn btn-primary">
              + Add New
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserDashBooking;
