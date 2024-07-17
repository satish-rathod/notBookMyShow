const express = require('express');
const { processPayment } = require('../controllers/paymentController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/process', authMiddleware, processPayment);

module.exports = router;
