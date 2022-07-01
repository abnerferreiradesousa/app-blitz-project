const taskService = require('../services/taskService');

const getAll = async (_req, res) => {
  try {
    const data = await taskService.getAll();
    res.status(200).json({ data });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getAll,
};
