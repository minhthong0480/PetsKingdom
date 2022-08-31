import { Fragment, useEffect, useState } from "react";
import StaffDashNav from "../components/StaffDashNav";
import { Link } from "react-router-dom";
import { allBookings, approveBooking, deleteBooking } from "../action/booking";
import { useSelector } from "react-redux";
import BookingSmallCard from "../components/cards/BookingSmallCard";
import { toast } from "react-toastify";

const UserDashBooking = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;
  const [booking, setBooking] = useState([]);
  useEffect(() => {
    loadUserBooking();
  }, []);

  const loadUserBooking = async () => {
    let res = await allBookings();
    setBooking(res.data);
  };
  const handleApproved = async (bookingId) => {
    if (!window.confirm("Do you want to approved this booing?")) return;
    approveBooking(bookingId).then((res) => {
      toast.success("Booking Approved");
      loadUserBooking();
    });
  };
  const handleDeleteBooking = async (bookingId) => {
    if (!window.confirm("Do you want to delete this booking?")) return;
    deleteBooking(token, bookingId).then((res) => {
      toast.success("Booking Deleted");
      loadUserBooking();
    });
  };
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
          <div className="container-fluid">
            <br />
            {booking.map((h) => (
              <BookingSmallCard
                key={h._id}
                h={h}
                handleApproved={handleApproved}
                handleDeleteBooking={handleDeleteBooking}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserDashBooking;
