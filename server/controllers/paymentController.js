const Booking = require('../models/Booking');

// Mock payment processing
exports.processPayment = async (req, res) => {
  const { bookingId } = req.body;
  try {
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    // Simulate payment processing
    booking.paymentStatus = 'Completed';
    await booking.save();

    res.json({ message: 'Payment processed successfully', booking });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
