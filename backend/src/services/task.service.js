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

const create = async (newTask) => {
  const data = await Task.create(newTask);
  return data;
};

const update = async (newTask, id) => {
  const data = await Task.update(newTask, { where: { id } });
  return data;
};

const remove = async (id) => {
  const data = await Task.destroy({ where: { id } });
  return data;
};

module.exports = {
  getAll,
  create,
  update,
  remove,
};
