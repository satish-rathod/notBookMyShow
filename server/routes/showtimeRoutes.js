const express = require('express');
const { getAllShowtimes, getShowtimeById, createShowtime, updateShowtime, deleteShowtime } = require('../controllers/showtimeController');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
const router = express.Router();

router.get('/', getAllShowtimes);
router.get('/:id', getShowtimeById);
router.post('/', authMiddleware, adminMiddleware, createShowtime); // Only admins can create showtimes
router.put('/:id', authMiddleware, adminMiddleware, updateShowtime); // Only admins can update showtimes
router.delete('/:id', authMiddleware, adminMiddleware, deleteShowtime); // Only admins can delete showtimes

module.exports = router;