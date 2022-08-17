import { Fragment, React, useState } from "react";
import { toast } from "react-toastify";

const UserBooking = () => {
  const [values, setValues] = useState({
    petname: "",
    age: "",
    type: "",
    breed: "",
    note: "",
  });

  const [preview, setPreview] = useState(
    "https://via.placeholder.com/100x100.png?text=PREVIEW"
  );
  //destructing variable from state
  const { petname, age, type, breed, note } = values;

  const handleSubmit = (e) => {};

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
          Choose your Pet Image
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

        <input
          type="text"
          name="type"
          onChange={handleChange}
          placeholder="Type"
          className="form-control m-2"
          values={type}
        />

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

export default UserBooking;
