//DEPENDENCIES
require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var mongodb = require("mongodb");
var logger = require("morgan");
var jquery = require("jquery");
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
	db.collection('radiant_forest', function(err, collection) {
		if (err) {
			console.log(err);
		};
	});
	console.log("Mongoose connection successful.");
});
// will need radiant_forest to story variable type to change based on story

mongoose.connect("mongodb://" + DB_USER + ":" + DB_PASS + "@" + DB_PATH);

//MAIN ROUTE TO DISPLAY HTML
app.get("/", function(req,res) {
	res.sendFile('./public/index.html');
})

//ROUTE TO LOGIN PHASE 2

//ROUTE TO SEND ANSWERS AND SAVE TO DB PHASE 2
// app.post("/send", function(req, res) {
// 	console.log(req.body);
// 	res.json({status:200});
// })

//MODEL
var Schema = mongoose.Schema;

var StorySchema = new Schema({
	id: {
		type: Number,
	},
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
		type: String, 
	},
	optionB: {
		type: String,
	},
	pathB: {
		type: String, // ? 
	},
	blank: {
		type: String, //noun verb adjective
		value: String, //their answer
	},
	treePic: {
		type: String, // How do I change the src?
	}
})

var Story = mongoose.model("Story", StorySchema);
module.exports = Story;

function find (collec, query, callback) {
	mongoose.connection.db.collection(collec, function (err, collection) {
	collection.find(query).toArray(callback);
	});
}

//ROUTE TO POPULATE BLANKS
app.get("/blanks", function(req, res) {
	find("radiant_forest", {}, function(err, storyBits) {
		console.log(storyBits);
		res.send(JSON.stringify(storyBits));
	});
})

//LISTENER
app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});