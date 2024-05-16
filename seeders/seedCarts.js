const Cart = require('../models/cartModel');

const carts = [
  {
    userId: 1,
    productId: 1,
    quantity: 2,
  },
  {
    userId: 1,
    productId: 2,
    quantity: 1,
  },
  {
    userId: 2,
    productId: 3,
    quantity: 1,
  },
];

const seedCarts = async () => {
  try {
    await Cart.sync({ force: true });
    await Cart.bulkCreate(carts);
    console.log('Carts have been seeded successfully.');
  } catch (error) {
    console.error('Unable to seed carts:', error);
  }
};

module.exports = seedCarts;
