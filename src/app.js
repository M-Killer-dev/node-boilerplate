const express = require('express');
const passport = require('passport');
const config = require('./config/config');
const morgan = require('./config/morgan');
const { jwtStrategy } = require('./config/passport');
const routes = require('./routes/v1');
const { unknownRouteHandler, errorConverter, errorHandler } = require('./middlewares/error');

const app = express();

if (config.env !== 'test') {
  app.use(morgan.successHandler);
  app.use(morgan.errorHandler);
}

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// jwt authentication
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

// v1 api routes
app.use('/v1', routes);

// send back a 404 error for any unknown api request
app.use(unknownRouteHandler);

// convert error to AppError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;
