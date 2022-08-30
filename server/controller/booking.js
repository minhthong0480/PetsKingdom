const Booking = require("../model/Booking");

const createBooking = async (req, res) => {
  try {
    let fields = req.fields;
    let booking = new Booking(fields);
    booking.save((error, result) => {
      if (error) {
        console.log("Cannot save pet", error);
        res.status(400).send("Saving booking error");
      }
      res.json(result);
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      err: err.message,
    });
  }
};

const userBookings = async (req, res) => {
  let bookings = await Booking.find({ postedBy: req.user })
    .limit(24)
    .select("-image.data")
    .populate("postedBy", "_id name")
    .populate("pets", "petname image")
    .exec();
  //console.log(all)
  res.json(bookings);
};

const allBookings = async (req, res) => {
  let all = await Booking.find({})
    .limit(24)
    .select("-image.data")
    .populate("postedBy", "_id name")
    .populate("pets", "petname image")
    .exec();
  //console.log(all)
  res.json(all);
};

const deleteBooking = async (req, res) => {
  let removed = await Booking.findByIdAndDelete(req.params.bookingId).exec();
  res.json(removed);
};

const approveBooking = async (req, res) => {
    try {  
      let updated = await Booking.findByIdAndUpdate(req.params.bookingId, {
        new: true,
        isApproved: true
      })
      res.json(updated)
    } catch (error) {
      console.log(error);
      res.status(400).send("Approve Failed");
    }
  };

module.exports = { createBooking, userBookings, allBookings, deleteBooking, approveBooking };
