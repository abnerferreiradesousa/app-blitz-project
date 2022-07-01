const routeTask = require('express').Router();
const taskController = require('../controllers/task.controller');

routeTask.get('/', taskController.getAll);

routeTask.post('/', taskController.create);

routeTask.put('/:id', taskController.update);

routeTask.delete('/:id', taskController.remove);

module.exports = routeTask;
