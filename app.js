//const express = require('express');
//const path = require('path');
//const logger = require('morgan');
//const cookieParser = require('cookie-parser');
//const bodyParser = require('body-parser');
//const mongoose = require('mongoose');
//
//const appRoutes = require('./routes/app');
//const userRoutes = require('./routes/user');
//
//const app = express();
//mongoose.connect('');
//
////view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'hbs');
//
//app.use(logger('dev'));
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false}));
//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
//
//app.use((req, res, next) => {
//  res.setHeader('Access-Control-Allow-Origin', '*');
//  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
//  next();
//});
//
////ng2 routes set here
//app.use('/user', userRoutes);
//app.use('/', appRoutes);
//
//// catch 404 and forward to error handler
//app.use(function (req, res, next) {
//  return res.render('index');
//});
//
//
//module.exports = app;
