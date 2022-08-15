import { Fragment } from "react";
import DashNav from '../components/DashNav'
const DashboardPet = () => {
  return (
    <Fragment>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>Dashboard</h1>
      </div>
      <DashNav />

    <p>show all bookings users have created</p>
    
    </Fragment>
  );
};

export default DashboardPet;
