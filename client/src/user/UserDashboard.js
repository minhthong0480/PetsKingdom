import { Fragment } from "react"

const Dashboard = () => {
    return (
        <Fragment>
            <div className="container-fluid bg-secondary p-5">
                <h1>Dashboard</h1>
            </div>

            <div className="container">
                <p>Show all pets and a button to book</p>
            </div>
        </Fragment>
    )
}

export default Dashboard