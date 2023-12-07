const { Category } = require('../models');

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    
    if (!name) {
      console.error('Name is required');
      return res.status(400).json({ message: '"name" is required' });
    }
    
    const newCategory = await Category.create({ name });
    console.log('Category created:', newCategory);
    res.status(201).json({ id: newCategory.id, name: newCategory.name });
  } catch (err) {
    console.error('Error creating category:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  createCategory,
};
