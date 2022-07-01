const routeTask = require('express').Router();
const taskController = require('../controllers/task.controller');

routeTask.get('/', taskController.getAll);

module.exports = routeTask;
