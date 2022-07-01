const router = require('express').Router();
const routeTask = require('./routeTask');

router.use('/task', routeTask);

module.exports = router;
