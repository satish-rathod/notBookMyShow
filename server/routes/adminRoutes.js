const express = require('express');
const { getAllBookings, updateBookingStatus, deleteBooking } = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
const router = express.Router();

router.get('/bookings', authMiddleware, adminMiddleware, getAllBookings); // Only admins can view all bookings
router.put('/bookings/:id', authMiddleware, adminMiddleware, updateBookingStatus); // Only admins can update booking status
router.delete('/bookings/:id', authMiddleware, adminMiddleware, deleteBooking); // Only admins can delete bookings

module.exports = router;
