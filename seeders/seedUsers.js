const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const users = [
  {
    username: 'user1',
    password: bcrypt.hashSync('password1', 10),
  },
  {
    username: 'user2',
    password: bcrypt.hashSync('password2', 10),
  },
];

const seedUsers = async () => {
  try {
    await User.sync({ force: true }); 
    await User.bulkCreate(users);
    console.log('Users have been seeded successfully.');
  } catch (error) {
    console.error('Unable to seed users:', error);
  }
};

module.exports = seedUsers;
