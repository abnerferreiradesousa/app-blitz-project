const router = require('express').Router();
const routeTask = require('./routeTask');
const routeUser = require('./routeUser');

router.use('/task', routeTask);

router.use('/user', routeUser);

module.exports = router;
