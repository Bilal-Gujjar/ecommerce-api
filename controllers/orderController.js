const Order = require('../models/orderModel');
const Cart = require('../models/cartModel');
const Product = require('../models/productModel');
const User = require('../models/userModel');

exports.placeOrder = async (req, res) => {
  try {
    const { userId } = req.body;
    const cartContents = await Cart.findAll({ where: { userId }, include: Product });

    if (cartContents.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    const totalCost = cartContents.reduce((total, item) => total + item.quantity * item.Product.price, 0);

    const order = await Order.create({ userId, productId: cartContents[0].productId, totalCost });
    const orderWithAssociations = await Order.findOne({
      where: { id: order.id },
      include: [User, Product]
    });

    await Cart.destroy({ where: { userId } });

    res.status(201).json(orderWithAssociations);
  } catch (error) {
    res.status(500).json({ message: 'Error placing order', error });
  }
};

exports.getOrderDetails = async (req, res) => {
  try {
    const { orderId } = req.params;
    const order = await Order.findOne({ where: { id: orderId }, include: [User, Product] });

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving order details', error });
  }
};
