require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const { errors } = require('celebrate');
const limiter = require('./middlewares/limiter');
const router = require('./routes');
const errorHandler = require('./middlewares/error');
const corsHandler = require('./middlewares/cors');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { DATABASE, PORT } = require('./utils/config');

const app = express();
app.use(limiter);
app.use(helmet());
app.use(express.json());

mongoose.connect(DATABASE, {
  useNewUrlParser: true,
}).then(() => console.log('Connect to MongoDB'));

app.use(corsHandler);
app.use(requestLogger);
app.use(router);
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
