const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  showtimes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Showtime',
  }],
}, {
  timestamps: true,
});

module.exports = mongoose.model('Movie', movieSchema);
