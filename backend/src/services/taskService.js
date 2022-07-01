const { Task, User } = require('../database/models');

const getAll = async () => {
  const data = await Task.findAll({
    include: [
      {
        model: User,
        as: 'users',
        attributes: { exclude: ['createdAt', 'updatedAt'] },
        through: { attributes: [] },
      },
    ],

  });
  return data;
};

module.exports = {
  getAll,
};
