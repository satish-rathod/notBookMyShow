const mongoose = require('mongoose');

const theaterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
  },
  seats: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Seat',
  }],
  showtimes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Showtime',
  }],
}, {
  timestamps: true,
});

module.exports = mongoose.model('Theater', theaterSchema);
