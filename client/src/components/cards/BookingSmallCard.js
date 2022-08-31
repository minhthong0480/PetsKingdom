import { Fragment } from "react";
import { useNavigate, Link, useMatch } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

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
              <p className="card-text">Owner: {h.postedBy.name}</p>
              <p className="alert alert-info">
                Note: {`${h.note.substring(1, 200)}...`}
              </p>
              <div className="">
                Status: {h.isApproved ? <p>Approved</p> : <p>Queuing</p>}
              </div>
              {/* <p className="card-text">Type: {h.type}</p>
              <p className="card-text">Age: {h.age}</p>
              <p className="card-text">Breed: {h.breed}</p> */}

              <div className="d-flex justify-content-between h4">
                <button
                  onClick={() => navigate(`/pets/${h._id}`)}
                  className="btn btn-primary"
                >
                  Show more
                </button>
                {isStaff && (
                  <EditOutlined
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
