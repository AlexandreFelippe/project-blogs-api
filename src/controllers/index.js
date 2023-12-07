const { loginController } = require('./login.controllers');
const { createUser, getUserById } = require('./user.controllers');

module.exports = {
  loginController,
  createUser,
  getUserById,
};