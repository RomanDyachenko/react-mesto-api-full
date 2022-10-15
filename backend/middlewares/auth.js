const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/UnauthorizedError');

require('dotenv').config();

const { JWT_SECRET } = process.env;
console.log(JWT_SECRET);

// eslint-disable-next-line consistent-return
module.exports = (req, res, next) => {
  const authorization = req.cookies.jwt;

  if (!authorization) {
    next(new UnauthorizedError('Необходима авторизация!'));
  }
  let payload;
  try {
    payload = jwt.verify(req.cookies.jwt, JWT_SECRET);
  } catch (err) {
    next(new UnauthorizedError('Необходима авторизация!'));
  }

  req.user = payload;

  next();
};
