const express = require('express');
const { getSeatsByShowtime, createSeats } = require('../controllers/seatController');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
const router = express.Router();

router.get('/:showtimeId', getSeatsByShowtime);
router.post('/', authMiddleware, adminMiddleware, createSeats); // Only admins can create seats

module.exports = router;
