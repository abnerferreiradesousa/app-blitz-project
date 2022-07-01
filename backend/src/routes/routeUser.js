const routeUser = require('express').Router();
const rescue = require('express-rescue');
const userController = require('../controllers/user.controller');

routeUser.get('/', rescue(userController.getAll));

routeUser.post('/', rescue(userController.create));

routeUser.put('/:id', rescue(userController.update));

routeUser.delete('/:id', rescue(userController.remove));

module.exports = routeUser;
