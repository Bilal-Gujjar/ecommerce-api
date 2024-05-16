const express = require('express');
const {
  placeOrder,
  getOrderDetails
} = require('../controllers/orderController');
const authenticate = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authenticate, placeOrder);
router.get('/:orderId', authenticate, getOrderDetails);

module.exports = router;
