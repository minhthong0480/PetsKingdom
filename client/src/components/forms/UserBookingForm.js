import { Fragment, React, useState } from "react";
import { DatePicker, Select } from "antd";
import "antd/dist/antd.css";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

const UserBookingForm = (props, note,date, setNote, setDate, handleChange, handleChangeDate, handleChangeNote, handleSubmit, disabledDate) => {
  // const {  date, note, setNote, handleChange, disabledDate, handleSubmit } =
  //   props;
  // const [pets, setPets] = useState([]);
  // const [note, setNote] = useState([]);
  // const [date, setDate] = useState([]);
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;
  const { Option } = Select;
  // console.log(props);

  //deconstruct props
  const {pets} = props
  console.log(props);

  const { RangePicker } = DatePicker;
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <Select
            className="w-100 m-2"
            size="large"
            name='pets'
            placeholder="Choose Pet from your Collection"
            // onChange={(value) => setValues({ ...values, type: value })}
            value={pets}
          >
            {pets.map((pet) => (
              <Option key={pet._id} value={pet._id}>{pet.petname}</Option>
            ))}
          </Select>
          <textarea
            type="content"
            name="note"
            onChange={handleChange}
            placeholder="Leave a note for Staff"
            className="form-control "
            values={note}
          />
          <div className="ml-4">
            <label> Date (From - To)</label>
          </div>
          <RangePicker
            className="form-control m-2"
            name='date'
            onChange={(date, dateString) => console.log(date,dateString)}
            disabledDate={disabledDate}
            values={date}
          />

          <br />
          <button className="btn btn-outline-primary m-2">Book</button>
        </div>
      </form>
    </Fragment>
  );
};

export default UserBookingForm;
