const express = require('express');
const routes = require('./routes');
const errMiddleware = require('./middlewares/error.middleware');

// Arquivo server.js não está funcionando! P q?

const app = express();

app.use(express.json());

app.use('/', routes);

app.use(errMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server is running ${PORT}`));

// module.exports = app;
