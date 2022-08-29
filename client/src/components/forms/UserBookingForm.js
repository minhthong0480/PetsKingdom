import { Fragment, React, useState } from "react";
import { DatePicker, Select } from "antd";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

const UserBookingForm = () => {
  const [pets, setPets] = useState([]);
  const [note, setNote] = useState([]);
  const [date, setDate] = useState([]);
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;
  const { Option } = Select;

  const disabledDate = (current) => {
    // Can not select days before today and today
    return current && current < moment().subtract(1, "days");
  };

  const { RangePicker } = DatePicker;
  return (
    <Fragment>
      <form action="">
        <div className="form-group">
          <Select
            className="w-100 m-2"
            size="large"
            placeholder="Choose Pet from your Collection"
          >
            {pets.map((pet) => (
              <Option value={pet._id}>{pet.petname}</Option>
            ))}
          </Select>
          <textarea
            type="content"
            name="note"
            // onChange={handleChange}
            placeholder="Leave a note for Staff"
            className="form-control m-2"
            values={note}
          />
          {/* <div className="ml-4">
            <label> How long you want to book</label>
          </div> */}
          <RangePicker
            className="form-control m-2"
            disabledDate={disabledDate}
          />

          <br />
          <button className="btn btn-outline-primary m-2">Book</button>
        </div>
      </form>
    </Fragment>
  );
};

export default UserBookingForm;
