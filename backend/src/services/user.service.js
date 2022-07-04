const { Task, User } = require('../database/models');
const { errorGenerate, generateJWT } = require('../utils');

const getAll = async (userId) => {
  const data = await User.findAll({
    where: { id: userId },
    include: [
      {
        model: Task,
        as: 'tasks',
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        through: { attributes: [] },
      },
    ],
  });
  return data;
};

const login = async (newUser) => {
  const data = await User.create(newUser);
  if (!data) {
    throw errorGenerate(404, 'Informações inconsistentes!');
  }
  const tokenPayload = {
    name: newUser.name,
    id: data.id,
  };
  const token = generateJWT(tokenPayload);
  return token;
};

const update = async (newUser, id) => {
  const data = await User.update(newUser, { where: { id } });
  return data;
};

const remove = async (id) => {
  const data = await User.destroy({ where: { id } });
  return data;
};

module.exports = {
  getAll,
  login,
  update,
  remove,
};
