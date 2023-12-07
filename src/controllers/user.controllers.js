const jwt = require('jsonwebtoken');
const { User } = require('../models');

const secret = process.env.JWT_SECRET;

const generateToken = (user) => jwt.sign(
  {
    data: {
      userId: user.id,
      displayName: user.displayName,
      email: user.email,
      image: user.image,
    },
  },
  secret,
  { expiresIn: '7d', algorithm: 'HS256' },
);

const handleUserCreationError = (res, error) => {
  console.error(error);
  res.status(500).json({ message: 'Internal Server Error' });
};

const createUser = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;

    const newUser = await User.create({ displayName, email, password, image });

    const token = generateToken(newUser);

    res.status(201).json({ token });
  } catch (err) {
    handleUserCreationError(res, err);
  }
};

module.exports = { createUser };