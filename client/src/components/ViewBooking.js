import { Fragment, React, useState, useEffect } from "react";
import { useParams, useMatch } from "react-router-dom";
import { toast } from "react-toastify";
import "antd/dist/antd.css";
import { read } from "../action/pet";
import { useSelector } from "react-redux";

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
  let match = useMatch("/user/edit-pet/:petId");

  const {bookingId} = useParams()
  console.log(bookingId)


  
  // const loadUserPet = async () => {
  //     let res = await read(petId, token);
  //     setValues({ ...values, ...res.data });
  //     setPreview(`${process.env.REACT_APP_API}/pets/pet/image/${petId}`);
  //   };
  //   useEffect(() => {
  //     loadUserPet();
  //   }, []);
    
  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h2>{}</h2>
      </div>
    </>
  );
};

export default ViewBooking;
