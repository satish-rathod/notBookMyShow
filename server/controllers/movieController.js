const Movie = require('../models/Movie');

// Get all movies
exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single movie by ID
exports.getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.json(movie);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new movie
exports.createMovie = async (req, res) => {
  const { title, description, genre, duration, rating } = req.body;
  try {
    const newMovie = new Movie({ title, description, genre, duration, rating });
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a movie by ID
exports.updateMovie = async (req, res) => {
  const { title, description, genre, duration, rating } = req.body;
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, {
      title, description, genre, duration, rating
    }, { new: true });
    if (!updatedMovie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.json(updatedMovie);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a movie by ID
exports.deleteMovie = async (req, res) => {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
    if (!deletedMovie) {
      return res.status(404).json({ error: 'Movie not found' });
    }
    res.json({ message: 'Movie deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Search movies
exports.searchMovies = async (req, res) => {
    const { query } = req.query;
    try {
      const movies = await Movie.find({
        $or: [
          { title: { $regex: query, $options: 'i' } },
          { genre: { $regex: query, $options: 'i' } },
          { rating: { $regex: query, $options: 'i' } }
        ]
      });
      res.json(movies);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
