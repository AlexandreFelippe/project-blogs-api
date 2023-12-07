const { Category } = require('../models');

const createCategory = async (name) => {
  if (!name) {
    throw new Error('"name" is required');
  }

  const newCategory = await Category.create({ name });
  return { id: newCategory.id, name: newCategory.name };
};

const listCategories = async () => {
  const categories = await Category.findAll();
  return categories.map((category) => ({ id: category.id, name: category.name }));
};

module.exports = {
  createCategory,
  listCategories,
};