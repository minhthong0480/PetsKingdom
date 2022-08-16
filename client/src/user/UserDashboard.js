import { Fragment } from "react";
import DashNav from "../components/DashNav";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <Fragment>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>Dashboard</h1>
      </div>

      <div className="container-fluid p-4">
        <DashNav />
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <h2>Pet Collection</h2>
          </div>
          <div className="col-md-3">
            <div class="input-group mb-3">
              <input type="text" class="form-control" />
              <button
                class="btn btn-primary"
                type="button"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
