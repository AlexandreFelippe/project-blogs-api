const { User } = require('../models');

const createUser = ({ email, password }) => User.create({ email, password });

const getUserEmail = (email) => User.findOne({ where: { email } });

module.exports = {
  createUser,
  getUserEmail,
};