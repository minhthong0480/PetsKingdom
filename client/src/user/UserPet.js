import { Fragment, React, useState } from "react";
import { toast } from "react-toastify";
import { DatePicker, Select } from "antd";
import moment from "moment";
import "antd/dist/antd.css";
import { createPet } from "../action/pet";
import { useSelector } from "react-redux";

const UserPet = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;

  const { Option } = Select;

  const [values, setValues] = useState({
    petname: "",
    age: "",
    type: "",
    breed: "",
    note: "",
    image: "",
    from: "",
    to: "",
  });

  const { RangePicker } = DatePicker;

  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < moment().subtract(1, "days");
  };

  const [preview, setPreview] = useState(
    "https://via.placeholder.com/100x100.png?text=PREVIEW"
  );
  //destructing variable from state
  const { petname, age, type, breed, note, image } = values;

  const handleSubmit = async (e) => {
    e.preventDefault();

    let petData = new FormData();
    petData.append("petname", petname);
    petData.append("age", age);
    petData.append("type", type);
    petData.append("breed", breed);
    petData.append("note", note);
    image && petData.append("image", image);

    console.log([...petData]);

    let res = await createPet(token, petData);
    console.log("HOTEL CREATE RES", res);
    //toast("New hotel added");
    // setTimeout(() => {
    //   window.location.reload();
    // }, 1000);
  };

  const handleImageChange = (e) => {
    // console.log(e.target.files[0]);
    setPreview(URL.createObjectURL(e.target.files[0]));
    setValues({ ...values, image: e.target.files[0] });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const petForm = () => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="btn btn-outline-secondary btn-block m-2 text-left">
          Choose your Pet Picture
          <input
            type="file"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
            hidden
          />
        </label>

        <input
          type="text"
          name="petname"
          onChange={handleChange}
          placeholder="Pet Name"
          className="form-control m-2"
          values={petname}
        />

        <input
          type="number"
          name="age"
          onChange={handleChange}
          placeholder="Age"
          className="form-control m-2"
          values={age}
        />

        {/* <input
          type="text"
          name="type"
          onChange={handleChange}
          placeholder="Type"
          className="form-control m-2"
          values={type}
        /> */}

        <Select onChange={(value)=>setValues({...values, type: value})} className='w-100 m-2' size="large" placeholder='Type of your Pet'>
          <Option key={1}>{'Dog'}</Option>
          <Option key={2}>{'Cat'}</Option>
          <Option key={3}>{'Bird'}</Option>
        </Select>

        <input
          type="text"
          name="breed"
          onChange={handleChange}
          placeholder="Breed"
          className="form-control m-2"
          values={breed}
        />

        <textarea
          type="content"
          name="note"
          onChange={handleChange}
          placeholder="Note"
          className="form-control m-2"
          values={note}
        />
      </div>

      {/* <RangePicker className="form-control m-2" disabledDate={disabledDate} /> */}

      <button className="btn btn-outline-primary m-2">Save</button>
    </form>
  );
  return (
    <Fragment>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h2>Add Pet</h2>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-10">
            <br />
            {petForm()}
          </div>
          <div className="col-md-2">
            <img src={preview} alt="preview_image" className="img-fluid m-2" />
            <pre>{JSON.stringify(values, null, 4)}</pre>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default UserPet;
