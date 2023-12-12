const { createPost } = require('../services');

const postController = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const userId = Number(req.user.userId);

  const result = await createPost({ title, content, categoryIds, userId });

  if (result.status) {
    res.status(result.status).json({ message: result.message });
  } else {
    res.status(201).json(result);
  }
};

module.exports = {
  postController,
};
