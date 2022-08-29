import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { allPets } from "../action/pet";
import SmallCard from "../components/cards/SmallCard";
import StaffDashNav from '../components/StaffDashNav'
import { useSelector } from "react-redux";

const UserDashboard = () => {
  const [pets, setPets] = useState ([])
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;

    useEffect(()=>{
        loadAllPets();
    },[]);

    const loadAllPets = async () =>{
        let res = await allPets(auth.token);
        setPets(res.data);
    }
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
          <div className="col-md-10 text-center">
            <h2>Pet Collection</h2>
          </div>
          <div className="col-md-3">
            <div className="input-group mb-3">
              <input type="text" className="form-control" />
              <button className="btn btn-primary" type="button">
                Search
              </button>
            </div>
          </div>
          <div className="col-md-2">
            <Link to="/user/pet" className="btn btn-primary">
              + Add New
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <br />
        {/* <pre>{JSON.stringify(pets, null, 4)}</pre> */}
        {pets.length > 0 && pets.map((h) => (
          <SmallCard key={h._id} h={h}/>
        ))}
      </div>
    </Fragment>
  );
};

export default UserDashboard;