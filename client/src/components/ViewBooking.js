import { Fragment, React, useState, useEffect } from "react";
import { useParams, useMatch } from "react-router-dom";
import { toast } from "react-toastify";
import "antd/dist/antd.css";
import { read } from "../action/pet";
import { useSelector } from "react-redux";
import { readBooking } from "../action/booking";

const ViewBooking = ({}) => {
  const [booking, setBooking] = useState({});
  const [pet, setPet] = useState({});
  const [image, setImage] = useState("");
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;
  const [preview, setPreview] = useState(
    "https://via.placeholder.com/100x100.png?text=PREVIEW"
  );
  const [values, setValues] = useState({
    ownername: "",
    petname: "",
    age: "",
    type: "",
    breed: "",
    note: "",
  });
  
  // let match = useMatch("/user/edit-pet/:petId");

  const {bookingId} = useParams()
  // console.log(bookingId)


  
  const loadUserPet = async () => {
      let res = await readBooking(bookingId, token);
      console.log(res);
      setBooking(res.data);
      setImage(`${process.env.REACT_APP_API}/bookings/booking/${bookingId}`);
    };

    useEffect(() => {
      loadUserPet();
    }, []);
    
  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h2>{booking.pets.petname}</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <br />
            <img src={image} alt={booking.pets.petname} className='img img-fluid m-2' />
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewBooking;
