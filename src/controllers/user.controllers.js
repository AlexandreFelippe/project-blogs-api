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

const createUser = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const newUser = await User.create({ displayName, email, password, image });

  const token = generateToken(newUser);

  res.status(201).json({ token });
};

const listUsers = async (req, res) => {
  const users = await User.findAll({
    attributes: ['id', 'displayName', 'email', 'image'],
  });

  res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  const user = await User.findByPk(id, {
    attributes: ['id', 'displayName', 'email', 'image'],
  });

  if (!user) {
    return res.status(404).json({ message: 'User does not exist' });
  }
    
  return res.status(200).json(user);
};

module.exports = {
  createUser,
  listUsers,
  getUserById,
};