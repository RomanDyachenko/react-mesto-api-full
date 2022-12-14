const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/UnauthorizedError');

require('dotenv').config();

const { JWT_SECRET, NODE_ENV } = process.env;

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return next(new UnauthorizedError('Необходима авторизация!'));
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, NODE_ENV === 'production' ? JWT_SECRET : 'dev-secret');
  } catch (err) {
    next(new UnauthorizedError('Необходима авторизация!'));
  }

  req.user = payload;
  next();
};
