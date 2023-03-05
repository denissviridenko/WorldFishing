const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');
const { phoneSchema } = require('../validators/users');
const UnauthorizedError = require('../errors/UnauthorizedError');
const { errorMessages } = require('../utils/constants');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 2,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      validate: {
        validator: validator.isEmail,
        message: errorMessages.emailRequired,
      },
    },
    phone: {
      type: String,
      validate: {
        validator: (value) => !phoneSchema.validate(value).error,
        message: errorMessages.phoneValidation,
      },
    },
    surname: {
      type: String,
      minlength: 2,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  { versionKey: false },
);

userSchema.statics.findUserByCredentials = function (email, password) {
  return this.findOne({ email }).select('+password')
    .then((user) => {
      if (!user) {
        return Promise.reject(new UnauthorizedError(errorMessages.wrongPasswordOrEmail));
      }
      return bcrypt.compare(password, user.password)
        .then((matched) => {
          if (!matched) {
            return Promise.reject(new UnauthorizedError(errorMessages.wrongPasswordOrEmail));
          }
          return user;
        });
    });
};

module.exports = mongoose.model('User', userSchema);
