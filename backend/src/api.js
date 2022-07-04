const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const errMiddleware = require('./middlewares/error.middleware');

// Arquivo server.js não está funcionando! P q?

const app = express();

app.use(cors());

app.use(express.json());

app.use('/', routes);

app.use(errMiddleware);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`Server is running ${PORT}`));

// module.exports = app;
