const express = require('express');
const { getAllMovies, getMovieById, createMovie, updateMovie, deleteMovie } = require('../controllers/movieController');
const authMiddleware = require('../middlewares/authMiddleware');
const adminMiddleware = require('../middlewares/adminMiddleware');
const { searchMovies } = require('../controllers/movieController');
const router = express.Router();

router.get('/search', searchMovies);
router.get('/', getAllMovies);
router.get('/:id', getMovieById);
router.post('/', authMiddleware, adminMiddleware, createMovie); // Only admins can create movies
router.put('/:id', authMiddleware, adminMiddleware, updateMovie); // Only admins can update movies
router.delete('/:id', authMiddleware, adminMiddleware, deleteMovie); // Only admins can delete movies


module.exports = router;
