const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mysql = require('mysql');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'pug');

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  app.use('/', indexRouter);
  app.use('/users', usersRouter);

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

  //Please setup local environment variables with proper addresses. NEVER UPLOAD CREDENTIALS IN CODE!
  var connection = mysql.createConnection({
    host     : process.env.CapstoneAwsSqlAddress,
    port     : process.env.CapstoneAwsSqlPort,
    user     : process.env.CapstoneAwsSqlUser,
    password : process.env.CapstoneAwsSqlPassword
  });

  connection.connect(function(err) {
    if (err) {
      console.error('Database connection '+ process.env.CapstoneAwsSqlAddress +' failed: ' + err.stack);
      return;
    }

    console.log('Connected to database address: ' + process.env.CapstoneAwsSqlAddress);
  });


module.exports = app;