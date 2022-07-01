const jwt = require('jsonwebtoken');
const { errorGenerate } = require('../utils/index');

const authToken = (req, _res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) throw new Error();
    const userData = jwt.verify(authorization, process.env.SECRET_KEY);
    req.user = userData;
  } catch (error) {
    next(errorGenerate(400, 'Efetue login para renovar seu token !'));
  }
};

module.exports = authToken;
