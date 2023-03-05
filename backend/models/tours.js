const mongoose = require('mongoose');
const { urlSchema } = require('../validators/general');
const { errorMessages } = require('../utils/constants');

const tourSchema = new mongoose.Schema(
  {
    country: {
      type: String,
    },
    countryEng: {
      type: String,
    },
    backgroundImg: {
      type: String,
      validate: {
        validator: (value) => !urlSchema.validate(value).error,
        message: `Бэкграунд ${errorMessages.urlRequired}`,
      },
    },
    description: {
      type: String,
    },
  },
);

module.exports = mongoose.model('Tour', tourSchema);
