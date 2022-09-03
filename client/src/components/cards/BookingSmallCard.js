import { Fragment } from "react";
import { useNavigate, Link, useMatch } from "react-router-dom";
import { EditOutlined, DeleteOutlined, FormOutlined } from "@ant-design/icons";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  MinusCircleOutlined,
  SyncOutlined,
} from "@ant-design/icons";
import { Divider, Tag } from "antd";

// const SmallCard = ({h})=> <>{JSON.stringify(h)}</>
const BookingSmallCard = ({
  h,
  handleDeleteBooking = (f) => f,

  handleApproved = (f) => f,
}) => {
  const isStaff = useMatch("/staff/dashboard/booking");
  const navigate = useNavigate();

  return (
    <Fragment>
      <div className="card m-3">
        <div className="row no-gutters">
          <div className="col-md-4">
            {h.pets.image.contentType ? (
              <img
                src={`${process.env.REACT_APP_API}/pets/pet/image/${h.pets._id}`}
                alt="pet_picture"
                className="card-image img img-fluid"
              />
            ) : (
              <img
                src="https://via.placeholder.com/900x500.png?text=pet+picture"
                alt="pet_picture"
                className="card-image img img-fluid"
              />
            )}
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{h.pets.petname}</h3>
              <div className="card-text mb-1 h4">Owner: </div>{" "}
              <p>{h.postedBy.name}</p>
              <p className="alert alert-info">
                Note: {`${h.note.substring(1, 200)}...`}
              </p>
              <div className="d-flex mb-1 h4">Booked Dates:</div>
              <p className="card-text mb-1">From: {h.fromDate.slice(0, 15)}</p>
              <p className="card-text ">To: {h.toDate.slice(0, 15)}</p>
              <div className="">
                <div> <p className="h4 mr-2" >Status: </p> </div>{" "}
                {h.isApproved ? (
                  <Tag icon={<CheckCircleOutlined />} color="success">
                    Approved
                  </Tag>
                ) : (
                  <Tag icon={<SyncOutlined spin />} color="processing">
                    Processing
                  </Tag>
                )}
              </div>
              <div className="d-flex justify-content-between mt-3 h4">
                <button
                  onClick={() => navigate(`/booking/${h._id}`)}
                  className="btn btn-primary"
                >
                  Show more
                </button>
                {isStaff && (
                  <FormOutlined
                    className="text-warning"
                    onClick={() => handleApproved(h._id)}
                  />
                )}
                <DeleteOutlined
                  onClick={() => handleDeleteBooking(h._id)}
                  className="text-danger"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default BookingSmallCard;
