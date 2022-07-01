const jwt = require('jsonwebtoken');

const generateJWT = (payload) => {
  const jwtConfig = {
    expiresIn: '3d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: payload }, process.env.SECRET_KEY, jwtConfig);
  return token;
};

module.exports = generateJWT;
