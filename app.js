const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
var bodyParser = require('body-parser');
var cors=require('cors');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const dbRouter = require('./routes/songDBRoutes');
const mysql = require('mysql');
const db = require('./db');
const app = express();

  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'pug');

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));


  app.use('/', indexRouter);
  app.use('/users', usersRouter);
  app.use('/songsDBRoutes', dbRouter);
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
// db.query("DELETE FROM TabsTable;", function(err, results)
//     {
//         if (err) throw err;
//
//     }
// );
// db.query("DELETE FROM ChordsTable;", function(err, results)
//     {
//         if (err) throw err;
//
//     }
// );
// db.query("DELETE FROM SongsTable;", function(err, results)
//       {
//         if (err) throw err;
//
//       }
//     );
// db.query("SELECT * FROM TabsTable;", function(err, results)
//     {
//         if (err) throw err;
//         console.log(results);
//     }
// );
// db.query("SELECT * FROM ChordsTable;", function(err, results)
//     {
//         if (err) throw err;
//         console.log(results);
//     }
// );
//db.getConnection(function(err,connection) {
//     if (err) {
//         connection.release();
//         console.log("\n\n\n\n error \n\n\n\n\n\n\n\n\n\n\n");
//         throw err;
//     }
//       connection.query("describe SongsTable;", function(err, results)
//       {
//         if (err) throw err;
//         console.log(results);
//       }
//     );
// });
  //Please setup local environment variables with proper addresses. NEVER UPLOAD CREDENTIALS IN CODE!
  // var connection = mysql.createConnection({
  //   host     : process.env.CapstoneAwsSqlAddress,
  //   port     : process.env.CapstoneAwsSqlPort,
  //   user     : process.env.CapstoneAwsSqlUser,
  //   password : process.env.CapstoneAwsSqlPassword,
  //   database : "SongsDatabase"
  // });

  //connection is established we should be able to export this connection
  // connection.connect(function(err) {
  //   if (err) {
  //     console.error('Database connection '+ process.env.CapstoneAwsSqlAddress +' failed: ' + err.stack);
  //     return;
  //   }
  //
  //   console.log('Connected to database address: ' + process.env.CapstoneAwsSqlAddress);
  //   //connection.query("CREATE DATABASE IF NOT EXISTS SongsDatabase", function (err, result) {
  //     //if (err) throw err;
  //     //console.log("Database created");
  //   //});
  //   var sql = "Describe SongsTable;";
  //   connection.query(sql, function(err, results)
  //   {
  //     if (err) throw err;
  //     console.log(results);
  //   }
  // );
  // });

module.exports = app;