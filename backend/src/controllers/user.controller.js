const userService = require('../services/user.service');

const getAll = async (req, res) => {
  const { id } = req.user;
  const data = await userService.getAll(id);
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
  const data = await userService.remove(req.params.id);
  res.status(201).json({ data });
};

module.exports = {
  getAll,
  create,
  update,
  remove,
};
