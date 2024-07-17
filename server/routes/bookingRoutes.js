const express = require('express');
const { createBooking, getBookingsByUser } = require('../controllers/bookingController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createBooking);
router.get('/', authMiddleware, getBookingsByUser);

module.exports = router;
