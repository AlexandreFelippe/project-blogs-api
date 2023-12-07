const { loginController } = require('./login.controllers');
const { createUser, getUserById } = require('./user.controllers');
const { createCategory, listallCategories } = require('./category.controllers');

module.exports = {
  loginController,
  createUser,
  getUserById,
  createCategory,
  listallCategories,
};