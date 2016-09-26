//DEPENDENCIES
require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var pry = require('pryjs');

//EXPRESS INSTANCE
var app = express();
var PORT = process.env.PORT || 3000;

//MONGODB CONFIGURATION
var mongoose = require('mongoose');
var db = mongoose.connection;
var DB_USER = process.env.DB_USER;
var DB_PASS = process.env.DB_PASS;
var DB_PATH = process.env.DB_PATH;

db.on('error', function(err) {
	console.log('Mongoose Error: ', err);
});

db.once('open', function() {
	console.log('Mongoose connection successful.');
});

mongoose.connect('mongodb://' + DB_USER + ':' + DB_PASS + '@' + DB_PATH);

//LISTENER
app.listen(PORT, function() {
	console.log("App listenting on PORT: " + PORT);
});