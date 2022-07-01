const taskService = require('../services/task.service');
// const { errorGenerate } = require('../utils/index');

const getAll = async (_req, res) => {
  const data = await taskService.getAll();
  res.status(200).json({ data });
};

const create = async (req, res) => {
  const data = await taskService.create(req.body);
  res.status(201).json({ data });
};

const update = async (req, res) => {
  const data = await taskService.update(req.body, req.params.id);
  res.status(201).json({ data });
};

const remove = async (req, res) => {
  const data = await taskService.update(req.body, req.params.id);
  res.status(201).json({ data });
};

module.exports = {
  getAll,
  create,
  update,
  remove,
};
