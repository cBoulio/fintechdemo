const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();

// APP VERSION -- 
const version = '/v1';

require('dotenv').config();

const port = process.env.PORT;
// we set the env here so when we change it our app uses a different db.
const env = process.env.NODE_ENV;

global.HELPER = require('./util/helper');
global.ERROR_CODES = require('./util/message_codes');
global.db = require('./config/db_connection');

const todoRoutes = require('./routes/todo.routes');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(version + '/todo', todoRoutes);

// Check if apis are running
app.get('/health', (req,res)=>{
  res.send({message:ERROR_CODES.HEALTH_CHECK});
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  console.log(err)
});

app.listen(app.get('port'), function() {
  console.log("Express server listening on port %d in %s mode",port, env);
});


module.exports = app;


