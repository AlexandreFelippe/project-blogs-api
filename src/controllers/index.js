const { loginController } = require('./login.controllers');
const { createUser, getUserById } = require('./user.controllers');
const { createCategory } = require('./category.controllers');

module.exports = {
  loginController,
  createUser,
  getUserById,
  createCategory,
};