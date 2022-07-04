const jwt = require('jsonwebtoken');

const errorGenerate = (status, message) => ({
  status, message,
});

const generateJWT = (payload) => {
  const jwtConfig = {
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: payload }, process.env.SECRET_KEY, jwtConfig);
  return token;
};

module.exports = {
  errorGenerate,
  generateJWT,
};
