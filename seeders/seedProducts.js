const Product = require('../models/productModel');

const products = [
  {
    name: 'Product 1',
    description: 'Description for product 1',
    price: 29.99,
    category: 'Category 1',
  },
  {
    name: 'Product 2',
    description: 'Description for product 2',
    price: 19.99,
    category: 'Category 2',
  },
  {
    name: 'Product 3',
    description: 'Description for product 3',
    price: 39.99,
    category: 'Category 1',
  },
  {
    name: 'Product 4',
    description: 'Description for product 4',
    price: 49.99,
    category: 'Category 3',
  },
];

const seedProducts = async () => {
  try {
    await Product.sync({ force: true });
    await Product.bulkCreate(products);
    console.log('Products have been seeded successfully.');
  } catch (error) {
    console.error('Unable to seed products:', error);
  }
};

module.exports = seedProducts;
