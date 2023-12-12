const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

function extractToken(bearerToken) {
  return bearerToken.split(' ')[1];
}

const validateToken = async (req, res, next) => {
  const bearerToken = req.header('Authorization');
  if (!bearerToken) return res.status(401).json({ message: 'Token not found' });
  const token = extractToken(bearerToken);
  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded.data;
    console.log('---------------------:', req.user);
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  validateToken,
};