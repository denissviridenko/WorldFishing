const BadRequestError = require('../../errors/BadRequestError');
const Booking = require('../../models/bookings');
const { errorMessages } = require('../../utils/constants');

module.exports.getBookings = (req, res, next) => {
  Booking.find({ owner: req.user.id })
    .then((bookings) => {
      res.send(bookings);
    })
    .catch(next);
};

module.exports.addBooking = (req, res, next) => {
  const booking = new Booking({
    ...req.body,
    owner: req.user.id,
    price: req.body.price || 150000,
  });
  booking
    .save()
    .then((result) => res.send(result))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError(errorMessages.bookingValidationFailure));
      } else { next(err); }
    });
};
