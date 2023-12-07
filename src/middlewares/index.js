const { validateUserInput } = require('./validateUserInput');
const { checkExistingUser } = require('./checkExistingUser');
const { validateToken } = require('./authMiddleware');

module.exports = {
  validateUserInput,
  checkExistingUser,
  validateToken,
};