const { User } = require("../models");
const userData = require('./userData.json');

const usersData = [
  // {
  //     name: 'Crystal',
  //     email: 'crystal@gmail.com',
  //     phone: 429123456,
  //     password: '12345ijkn'
  // }
];

const seedUsers = () => User.bulkCreate(usersData);

module.exports = seedUsers;
