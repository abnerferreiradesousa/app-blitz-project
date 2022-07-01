const userService = require('../services/user.service');
// const { errorGenerate } = require('../utils/index');

const getAll = async (_req, res) => {
  const data = await userService.getAll();
  res.status(200).json({ data });
};

const create = async (req, res) => {
  const data = await userService.create(req.body);
  res.status(201).json({ data });
};

const update = async (req, res) => {
  const data = await userService.update(req.body, req.params.id);
  res.status(201).json({ data });
};

const remove = async (req, res) => {
  const data = await userService.update(req.body, req.params.id);
  res.status(201).json({ data });
};

module.exports = {
  getAll,
  create,
  update,
  remove,
};
