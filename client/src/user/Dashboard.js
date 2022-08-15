import { Fragment } from "react";
import DashNav from '../components/DashNav'
const Dashboard = () => {
  return (
    <Fragment>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>Dashboard</h1>
      </div>
      <DashNav />
      <p>show all pet user created</p>
    
    </Fragment>
  );
};

export default Dashboard;
