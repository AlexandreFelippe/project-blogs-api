const { BlogPost, PostCategory, Category } = require('../models');

const validateRequiredFields = (title, content, categoryIds) => {
  if (!title || !content || !categoryIds) {
    return { status: 400, message: 'Some required fields are missing' };
  }
  return null;
};

const validateCategoryIds = async (categoryIds) => {
  const existingCategories = await Category.findAll({
    where: { id: categoryIds },
  });

  if (existingCategories.length !== categoryIds.length) {
    console.log(existingCategories);
    console.log(categoryIds);
    return { status: 400, message: 'one or more "categoryIds" not found' };
  }
  return null;
};

const associateCategoriesToPost = async (postId, categoryIds) => {
  const postCategories = categoryIds.map((categoryId) => ({
    postId,
    categoryId,
  }));

  await PostCategory.bulkCreate(postCategories);
};

const createPostInDatabase = async (title, content, userId) => BlogPost.create({
  title,
  content,
  userId,
  published: new Date(),
  updated: new Date(),
});

const createPost = async ({ title, content, categoryIds, userId }) => {
  const validationError = validateRequiredFields(title, content, categoryIds);
  if (validationError) {
    return validationError;
  }

  const categoryIdsValidationError = await validateCategoryIds(categoryIds);
  if (categoryIdsValidationError) {
    return categoryIdsValidationError;
  }
  console.log('userId:', userId);
  const newPost = await createPostInDatabase(title, content, userId);
  await associateCategoriesToPost(newPost.id, categoryIds);

  return newPost;
};

module.exports = {
  createPost,
};