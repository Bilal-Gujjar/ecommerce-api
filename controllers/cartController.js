
const Cart = require('../models/cartModel');
const Product = require('../models/productModel');
const User = require('../models/userModel');


exports.addToCart = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    const cart = await Cart.create({ userId, productId, quantity });
    const cartWithAssociations = await Cart.findOne({ 
      where: { id: cart.id },
      include: [User, Product]
    });
    res.status(201).json(cartWithAssociations);
  } catch (error) {
    res.status(500).json({ message: 'Error adding to cart', error });
  }
};

exports.removeFromCart = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    await Cart.destroy({ where: { userId, productId } });
    res.status(200).json({ message: 'Product removed from cart' });
  } catch (error) {
    res.status(500).json({ message: 'Error removing product from cart', error });
  }
};

exports.getCartContents = async (req, res) => {
  try {
    const { userId } = req.params;
    const cartContents = await Cart.findAll({
      where: { userId },
      include: [Product],
    });
    res.status(200).json(cartContents);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving cart contents', error });
  }
};

