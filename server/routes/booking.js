const router = require("express").Router();
const formidable = require('express-formidable')
const verifiedToken = require("./verifyToken")
//controller
const { createBooking, readBooking, userBookings, allBookings, deleteBooking, approveBooking } = require("../controller/booking");

router.post("/create-booking",formidable(), verifiedToken, createBooking);
router.get('/bookings', verifiedToken, userBookings)
router.get('/allbookings', allBookings)
router.put('/approvebookings/:bookingId', approveBooking)
router.delete("/delete-booking/:bookingId", verifiedToken, deleteBooking);
router.get("/booking/:bookingId", readBooking);


module.exports = router;