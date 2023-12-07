const { User } = require('../models');

const checkExistingUser = async (req, res, next) => {
  try {
    const { email } = req.body;

    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) {
      return res.status(409).json({ message: 'User already registered' });
    }

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  checkExistingUser,
};