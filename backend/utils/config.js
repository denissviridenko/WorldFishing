const { tooMuchRequests } = require('./constants');

module.exports.rateLimiterConfig = {
  message: { message: tooMuchRequests },
  max: 100,
};
