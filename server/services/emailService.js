const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password'
  }
});

const sendBookingConfirmation = (email, bookingDetails) => {
  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: 'Booking Confirmation',
    text: `Your booking is confirmed. Details: ${JSON.stringify(bookingDetails)}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

module.exports = {
  sendBookingConfirmation
};
