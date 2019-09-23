var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var router = express.Router();
var userRouter = require('./routes/users');
var app = express();

mongoose.connect('mongodb://localhost/dofus-rearing', { useNewUrlParser: true })

app.use(logger('dev'));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "dofus-rearing.com"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('view engine', 'html');
app.use('/users', userRouter);
app.use('/favicon.ico', express.static('public/favicon.ico'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  //res.render('error');
});

module.exports = app;
