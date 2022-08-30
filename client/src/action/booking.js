import axios from 'axios'

export const createBooking = async (token, data) => await axios.post(`${process.env.REACT_APP_API}/bookings/create-booking`, data, {
    headers: {
        Authorization: `Bearer ${token}`,
    }
});

export const userBookings = async (token) => await axios.get(`${process.env.REACT_APP_API}/bookings/bookings`, {
    headers: {
        Authorization: `Bearer ${token}`,
    }
});

export const allBookings = async () => await axios.get(`${process.env.REACT_APP_API}/bookings/allbookings`);
export const approveBooking = async (bookingId) => await axios.put(`${process.env.REACT_APP_API}/bookings/approvebookings/${bookingId}`);

export const deleteBooking = async (token, bookingId) =>
  await axios.delete(`${process.env.REACT_APP_API}/bookings/delete-booking/${bookingId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });