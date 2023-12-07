const Categories = require('../models/Category');

const createCategory = async (name) => {
  if (!name) {
    throw new Error('"name" is required');
  }

  const newCategory = await Categories.create({ name });
  return { id: newCategory.id, name: newCategory.name };
};

module.exports = {
  createCategory,
};