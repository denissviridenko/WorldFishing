const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: true,
    },
    status: {
      type: String,
    },
    price: {
      type: Number,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    bookingId: {
      type: Number,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model('Booking', bookingSchema);
