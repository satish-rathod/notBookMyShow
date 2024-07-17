const express = require('express');
const { getAllTheaters, getTheaterById, createTheater, updateTheater, deleteTheater } = require('../controllers/theaterController');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
const router = express.Router();

router.get('/', getAllTheaters);
router.get('/:id', getTheaterById);
router.post('/', authMiddleware, adminMiddleware, createTheater); 
router.put('/:id', authMiddleware, adminMiddleware, updateTheater); 
router.delete('/:id', authMiddleware, adminMiddleware, deleteTheater);

module.exports = router;
