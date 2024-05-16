const seedUsers = require('./seedUsers');
const seedProducts = require('./seedProducts');
const seedCarts = require('./seedCarts');
const seedOrders = require('./seedOrders');
const sequelize = require('../utils/db');

const mainSeeder = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');

    await seedUsers();
    await seedProducts();
    await seedCarts();
    await seedOrders();

    console.log('All tables have been seeded successfully.');
  } catch (error) {
    console.error('Unable to seed the database:', error);
  } finally {
    await sequelize.close();
  }
};

mainSeeder();
