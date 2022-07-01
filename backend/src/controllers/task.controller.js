const taskService = require('../services/taskService');

const getAll = async (_req, res) => {
  try {
    const data = await taskService.getAll();
    res.status(200).json({ data });
  } catch (error) {
    console.log(error.message);
  }
};

const create = async (req, res) => {
  try {
    const data = await taskService.create(req.body);
    res.status(201).json({ data });
  } catch (error) {
    console.log(error.message);
  }
};

const update = async (req, res) => {
  try {
    const data = await taskService.update(req.body, req.params.id);
    res.status(201).json({ data });
  } catch (error) {
    console.log(error.message);
  }
};

const remove = async (req, res) => {
  try {
    const data = await taskService.update(req.body, req.params.id);
    res.status(201).json({ data });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getAll,
  create,
  update,
  remove,
};
