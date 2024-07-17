const Seat = require('../models/Seat');

// Get seats for a showtime
exports.getSeatsByShowtime = async (req, res) => {
  try {
    const seats = await Seat.find({ showtime: req.params.showtimeId });
    res.json(seats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create seats for a showtime
exports.createSeats = async (req, res) => {
  const { showtimeId, seats } = req.body;
  try {
    const seatDocs = seats.map(seat => ({ showtime: showtimeId, seatNumber: seat }));
    const newSeats = await Seat.insertMany(seatDocs);
    res.status(201).json(newSeats);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


