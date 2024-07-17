const Booking = require('../models/Booking');
const Seat = require('../models/Seat');
const { sendBookingConfirmation } = require('../services/emailService');

// Create a new booking
exports.createBooking = async (req, res) => {
  const { showtimeId, seatIds, totalAmount } = req.body;
  try {
    const newBooking = new Booking({
      user: req.user._id,
      showtime: showtimeId,
      seats: seatIds,
      totalAmount,
      paymentStatus: 'Pending'
    });

    await newBooking.save();

    // Mark seats as booked
    await Seat.updateMany({ _id: { $in: seatIds } }, { isBooked: true });

    // Send booking confirmation email
    const user = await User.findById(req.user._id);
    sendBookingConfirmation(user.email, newBooking);

    res.status(201).json(newBooking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get bookings by user
exports.getBookingsByUser = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id }).populate('showtime').populate('seats');
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
