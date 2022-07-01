const routeTask = require('express').Router();
const rescue = require('express-rescue');
const taskController = require('../controllers/task.controller');

routeTask.get('/', rescue(taskController.getAll));

routeTask.post('/', rescue(taskController.create));

routeTask.put('/:id', rescue(taskController.update));

routeTask.delete('/:id', rescue(taskController.remove));

module.exports = routeTask;
