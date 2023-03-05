const router = require('express').Router();
const { getTours } = require('../controllers/tours/tours');

router.get('/', getTours);

module.exports = router;
