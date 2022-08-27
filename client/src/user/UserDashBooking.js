import { Fragment } from "react";
import {useState, useEffect} from 'react'
import DashNav from "../components/DashNav";
import { Link } from "react-router-dom";
import BookingSmallCard from "../components/cards/BookingSmallCard";
import { useSelector } from "react-redux";
import { userBookings } from "../action/booking";

const UserDashBooking = () => {
  // const [booking, setBooking] = useState ([])
  // const { auth } = useSelector((state) => ({ ...state }));
  // const { token } = auth;

  //   useEffect(()=>{
  //       loadUserBooking();

  //   },[]);

  //   const loadUserBooking = async () =>{
  //       let res = await userBookings(auth.token);
  //       setBooking(res.data);
  //   }
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
            <h2> Your Booking</h2>
          </div>
          <div className="col-md-2">
            <Link to="/user/booking" className="btn btn-primary">
              + Add New
            </Link>
          </div>
        </div>

        {/* <div className="row">
          {booking.map((h)=>(
            <BookingSmallCard key={h._id} h={h} />
          ))}
        </div> */}
      </div>
    </Fragment>
  );
};

export default UserDashBooking;
