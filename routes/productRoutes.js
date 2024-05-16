const express = require('express');
const {
  createProduct,
  getProducts,
  getProductByCategory,
  updateProduct,
  deleteProduct
} = require('../controllers/productController');
const authenticate = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authenticate, createProduct);
router.get('/', getProducts);
router.get('/:category', getProductByCategory);
router.put('/:id', authenticate, updateProduct);
router.delete('/:id', authenticate, deleteProduct);

module.exports = router;
