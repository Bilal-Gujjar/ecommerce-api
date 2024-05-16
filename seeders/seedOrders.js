const Order = require('../models/orderModel');

const orders = [
  {
    userId: 1,
    productId: 1,
    totalCost: 59.98,
  },
  {
    userId: 2,
    productId: 3,
    totalCost: 39.99,
  },
];

const seedOrders = async () => {
  try {
    await Order.sync({ force: true }); 
    await Order.bulkCreate(orders);
    console.log('Orders have been seeded successfully.');
  } catch (error) {
    console.error('Unable to seed orders:', error);
  }
};

module.exports = seedOrders;
