const express = require('express');
require('dotenv').config();

const app = express();

const process = require('process');
const mongoose = require('mongoose');

const { PORT = 3000 } = process.env;
const cors = require('cors');
const bodyParser = require('body-parser');
const {
  errors,
} = require('celebrate');
const auth = require('./middlewares/auth');
const NotFoundError = require('./errors/NotFoundError');
const errorHandler = require('./middlewares/errorHandler');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { signUpSchema, signInSchema } = require('./validators/users');

const {
  login, createUser,
} = require('./controllers/users/users');

const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001',
];

process.on('uncaughtException', (err, origin) => {
  console.log(`message: ${origin} ${err.name} c текстом ${err.message} не была обработана. Обратите внимание!`);
});

mongoose.connect('mongodb+srv://adminUser:ShCd4HAFY73jQ3rX@worldfishing.3gt2uxw.mongodb.net/worldFishing?retryWrites=true&w=majority', {}, () => {
  console.log('DB is working');
});

app.use(cors(
  {
    origin: allowedOrigins,
    allowedHeaders: ['Content-Type', 'Authorization'],
  },
));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(requestLogger);

app.use('/tours', require('./routes/tours'));

app.post('/sign-up', signUpSchema, createUser);

app.post('/sign-in', signInSchema, login);

app.use(auth);

app.use('/users', require('./routes/users'));
app.use('/bookings', require('./routes/bookings'));

app.use(errorLogger);

app.use((req, res, next) => {
  next(new NotFoundError(`Страница ${req.url} не найдена`));
});

app.use((errors()));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
