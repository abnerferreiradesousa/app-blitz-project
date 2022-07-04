const userService = require('../services/user.service');

const getAll = async (req, res) => {
  const { id } = req.user;
  const data = await userService.getAll(id);
  res.status(200).json({ data });
};

const login = async (req, res) => {
  const { name, password } = req.body;
  const newUserInfo = {
    name,
    password,
  };
  const token = await userService.login(newUserInfo);
  res.status(201).json({ token });
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
  login,
  update,
  remove,
};
