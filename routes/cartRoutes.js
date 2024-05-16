const express = require('express');
const {
  createCart,
  addToCart,
  removeFromCart,
  getCartContents
} = require('../controllers/cartController');
const authenticate = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/add', authenticate, addToCart);
router.post('/remove', authenticate, removeFromCart);
router.get('/:userId', authenticate, getCartContents);

module.exports = router;
