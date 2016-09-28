var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	userName: {
		type: String,
	},
	userPassword: {
		type: String,
	},
	userGender: {
		type: Boolean,
	}
});

var StorySchema = new Schema({
	storyBook: {
		type: String,
	},
	chapterText: {
		type: String,
	},
	optionA: {
		type: Number, // This will be a pointer?
	},
	optionB: {
		type: Number,
	}
})

var Story = mongoose.model("Story", StorySchema);
var User = mongoose.model("User", UserSchema);
module.exports = Story;
module.exports = User;