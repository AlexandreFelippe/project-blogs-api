const LoginService = require('./login.service');
const { CreateCategory, listCategories } = require('./category.service');
const { createPost } = require('./post.service');

module.exports = {
  LoginService,
  CreateCategory,
  listCategories,
  createPost,
};