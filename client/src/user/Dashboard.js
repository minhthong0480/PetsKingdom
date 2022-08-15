import { Fragment } from "react"
import StaffDashboard from "../components/StaffDashboard"
import UserDashboard from "../components/UserDashboard"

const Dashboard = () => {
    return (
        <Fragment>
            <div className="container-fluid bg-secondary p-5 text-center">
                <h1>Dashboard</h1>
            </div>

            <div className="container-fluid p-4">
                <UserDashboard />
                <StaffDashboard />
            </div>

            {/* <div className="container">
                <p>Show all pets and a button to book</p>
            </div> */}
        </Fragment>
    )
}

export default Dashboard