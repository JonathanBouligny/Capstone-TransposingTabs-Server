const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
const dbRouter = require('./routes/songDBRoutes');
const connection = require('./db');
const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

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

//
// connection.query("DROP DATABASE SongsDatabase", function (err, result) {
//   if (err) throw err;
//   console.log("Database created");
// });
// connection.query("CREATE DATABASE IF NOT EXISTS SongsDatabase", function (err, result) {
//   if (err) throw err;
//   console.log("Database created");
// });
// var sql_songs =  "CREATE TABLE IF NOT EXISTS SongsTable(id INT NOT NULL AUTO_INCREMENT, song_name VARCHAR(255) NOT NULL,"+
//     " album VARCHAR(255), artist VARCHAR(255), default_key	VARCHAR(2),"+
//     " CONSTRAINT UC_Song UNIQUE (song_name, album, artist),"+
//     " PRIMARY KEY(id));";
// console.log(sql_songs);
// var sql_chords = "CREATE TABLE IF NOT EXISTS ChordsTable(" +
//     "id INT, " +
//     "song_key VARCHAR(2), " +
//     "chords TEXT, " +
//     "FOREIGN KEY(id) REFERENCES SongsTable(id), " +
//     "PRIMARY KEY(id, song_key) " +
//     ");";
// var sql_tabs =   "Create TABLE IF NOT EXISTS TabsTable ("+
//     "id INT, "+
//     "song_key VARCHAR(2), "+
//     "Tab TEXT, "+
//     "FOREIGN KEY(id) REFERENCES SongsTable(id), "+
//     "PRIMARY KEY(id, song_key));";
//
// connection.query(sql_songs, function (err, result) {
//   if (err) throw err;
//   console.log("Songs Table created");
// });
// connection.query(sql_chords, function (err, result) {
//   if (err) throw err;
//   console.log("Chords Table created");
// });
// connection.query(sql_tabs, function (err, result) {
//   if (err) throw err;
//   console.log("Tabs Table created");
// });

module.exports = app;