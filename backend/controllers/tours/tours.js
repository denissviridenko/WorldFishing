const Tour = require('../../models/tours');

module.exports.getTours = (req, res, next) => {
  Tour.find({})
    .then((tours) => {
      res.send(tours);
    })
    .catch(next);
};
