var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var homeRouter = require('./routes/home');
var nsxzRouter = require('./routes/nsxz');
var baoyangRouter = require('./routes/baoyang');
var dakaxiuRouter = require('./routes/dakaxiu');
var xijiezsRouter = require('./routes/xijiezs');
var reserveRouter = require('./routes/reserve');
var serviceRouter = require('./routes/service');
var nscsRouter = require('./routes/nscs');
var nvsxzRouter = require('./routes/nvsxz');
var pphzRouter = require('./routes/pphz');
var mancsRouter = require('./routes/mancs');

var app = express();

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
app.use('/home',homeRouter);
app.use('/nsxz',nsxzRouter);
app.use('/baoyang',baoyangRouter);
app.use('/dakaxiu',dakaxiuRouter);
app.use('/xijiezs',xijiezsRouter);
app.use('/reserve',reserveRouter);
app.use('/service',serviceRouter);
app.use('/nscs',nscsRouter);
app.use('/nvsxz',nvsxzRouter);
app.use('/pphz',pphzRouter);
app.use('/mancs',mancsRouter);



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

module.exports = app;
