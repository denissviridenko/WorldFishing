const router = require('express').Router();
const { getBookings, addBooking } = require('../controllers/bookings/bookings');

router.get('/', getBookings);

router.post('/', addBooking);

module.exports = router;
