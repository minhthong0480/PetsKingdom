import { Fragment } from "react";
import { Link } from "react-router-dom";

const StaffDashboard = () => {
  return (
    <Fragment>
      <div class="container text-center">
        <div class="row">
          <div class="col border border-dark p-3 m-3">
            <div clasName="card">
              <div clasName="card-body">
                <h5 clasName="card-title">Create Pets</h5>
                <p clasName="card-text">Click to create pet's profile for customers</p>
                <Link to="/student-profile">
                  <button className="btn btn-primary">Create</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col border border-dark p-3 m-3">
            <div clasName="card">
              <div clasName="card-body">
                <h5 clasName="card-title">Create Booking for customers</h5>
                <p clasName="card-text">Click to create new booking</p>
                <Link to="/student-profile">
                  <button className="btn btn-primary">Book</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default StaffDashboard;
