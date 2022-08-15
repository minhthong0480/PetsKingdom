import { Fragment } from "react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  return (
    <Fragment>
      <div class="container text-center">
        <div class="row">
          <div class="col border border-dark p-3 m-3">
            <div clasName="card">
              <div clasName="card-body">
                <h5 clasName="card-title">View Pet Collection</h5>
                <p clasName="card-text">Click to view pet details</p>
                <Link to="/student-profile">
                  <button className="btn btn-primary">View</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col border border-dark p-3 m-3">
            <div clasName="card">
              <div clasName="card-body">
                <h5 clasName="card-title">Book a Room for your Pet</h5>
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

export default UserDashboard;
