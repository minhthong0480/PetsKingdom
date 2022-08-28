import { Fragment, React, useState, useEffect } from "react";
import { useParams, useMatch } from "react-router-dom";
import { toast } from "react-toastify";
import { DatePicker, Select } from "antd";
import "antd/dist/antd.css";
import { read } from "../action/pet";
import { useSelector } from "react-redux";
import PetCreateForm from "../components/forms/PetCreateForm";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const EditPet = ({}) => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;

  const navigate = useNavigate();

  const [values, setValues] = useState({
    ownername: "",
    petname: "",
    age: "",
    type: "",
    breed: "",
    note: "",
    image: "",
  });
  const [preview, setPreview] = useState(
    "https://via.placeholder.com/100x100.png?text=PREVIEW"
  );
  let match = useMatch("/user/edit-pet/:petId");
  const {petId} = useParams()
  //   console.log(petId)

  useEffect(() => {
    // console.log(match.params);
    loadUserPet();
  }, []);

  const loadUserPet = async () => {
    let res = await read(petId, token);
    setValues({ ...values, ...res.data });
    setPreview(`${process.env.REACT_APP_API}/pets/pet/image/res.data._id`);
  };

  const handleSubmit = async (e) => {
    //
  };

  const handleImageChange = (e) => {
    // console.log(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
    setValues({ ...values, image: e.target.files[0] });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h2>Edit User Pet</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <br />
            show edit form
          </div>
          <div className="col-md-2">
            <img
              src={preview}
              alt="preview_image"
              className="img img-fluid m-2"
            />
            <pre>{JSON.stringify(values, null, 4)}</pre>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditPet;
