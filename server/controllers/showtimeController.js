const Showtime = require('../models/Showtime');

// Get all showtimes
exports.getAllShowtimes = async (req, res) => {
  try {
    const showtimes = await Showtime.find().populate('movie').populate('theater');
    res.json(showtimes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single showtime by ID
exports.getShowtimeById = async (req, res) => {
  try {
    const showtime = await Showtime.findById(req.params.id).populate('movie').populate('theater');
    if (!showtime) {
      return res.status(404).json({ error: 'Showtime not found' });
    }
    res.json(showtime);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create a new showtime
exports.createShowtime = async (req, res) => {
  const { movie, theater, startTime } = req.body;
  try {
    const newShowtime = new Showtime({ movie, theater, startTime });
    await newShowtime.save();
    res.status(201).json(newShowtime);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update a showtime by ID
exports.updateShowtime = async (req, res) => {
  const { movie, theater, startTime } = req.body;
  try {
    const updatedShowtime = await Showtime.findByIdAndUpdate(req.params.id, {
      movie, theater, startTime
    }, { new: true });
    if (!updatedShowtime) {
      return res.status(404).json({ error: 'Showtime not found' });
    }
    res.json(updatedShowtime);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a showtime by ID
exports.deleteShowtime = async (req, res) => {
  try {
    const deletedShowtime = await Showtime.findByIdAndDelete(req.params.id);
    if (!deletedShowtime) {
      return res.status(404).json({ error: 'Showtime not found' });
    }
    res.json(deletedShowtime);
  }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
}

// Get all showtimes by movie ID

exports.getShowtimesByMovieId = async (req, res) => {
    try {
        const showtimes = await Showtime.find({ movie: req.params.id }).populate('movie').populate('theater');
        res.json(showtimes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    }

// Get all showtimes by theater ID

exports.getShowtimesByTheaterId = async (req, res) => {
    try {
        const showtimes = await Showtime.find({ theater: req.params.id }).populate('movie').populate('theater');
        res.json(showtimes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    }

   
