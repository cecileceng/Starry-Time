//DEPENDENCIES
require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var logger = require("morgan");
var pry = require("pryjs");
// eval(pry.it)

//EXPRESS INSTANCE
var app = express();
var PORT = process.env.PORT || 3000; //Sets an initial port

//RUN MORGAN FOR LOGGING
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vnd.api+json"}));

app.use(express.static("./public"));

//MONGODB CONFIGURATION
var mongoose = require("mongoose");
var db = mongoose.connection;
var DB_USER = process.env.DB_USER;
var DB_PASS = process.env.DB_PASS;
var DB_PATH = process.env.DB_PATH;

db.on("error", function(err) {
	console.log("Mongoose Error: ", err);
});

db.once("open", function() {
	console.log("Mongoose connection successful.");
});

mongoose.connect("mongodb://" + DB_USER + ":" + DB_PASS + "@" + DB_PATH);

//MAIN ROUTE? (PULLING THINGS FROM DB)
app.get("/", function(req,res) {
	res.sendFile('./public/index.html');
})

//ROUTE TO LOGIN (PUTTING THINGS INTO THE DB) PHASE 2 ITEM

//MODEL
var Schema = mongoose.Schema;

var StorySchema = new Schema({
	storyBook: {
		type: String,
	},
	position: {
		type: String,
	},
	chapterText: {
		type: String,
	},
	optionA: {
		type: String,
	},
	pathA: {
		type: Number, // This will be an index?
	},
	optionB: {
		type: String,
	},
	pathB: {
		type: Number, // ? 
	},
	blank: {
		type: String, //noun verb adjective
		value: String, //their answer
	},
	treePic: {
		type: String, // How to reference image? Can be if statement on Tree?
	}
})

var Story = mongoose.model("Story", StorySchema);
module.exports = Story;

//LISTENER
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});