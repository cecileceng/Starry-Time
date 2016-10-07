import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isBeginning: false,
			chooseStory: false,
			storyStarted: false,
			storyInfo: null,
			whereAmI: null, //set to starting position
			answers: null,
		};
	};
	chooseStory () {
		this.setState({chooseStory: true}) // Pulls up selectable stories in StartBlock
	}
// Add function for when they choose option in order to change position and show chapterText (set state position on top level)

	populateStory (res) {
		var answers = {};
		var chapters = res; // Local variable is res from ...
		for (var i = 0; i < chapters.length; i++) {
			var tokens = chapters[i].chapterText.match(/(<\w+>)/g);
			answers[chapters[i].position] = []; // using chapter key initialize empty array
			// answers.[](chapters.position) invokes bracket function and passing in chap
			for (var j = 0; j < tokens.length; j++) {
				answers[chapters[i].position].push({type:tokens[j], value:""}); //will be modified later
			}
		}
		this.setState({storyInfo: res, isBeginning: true, answers: answers});
		//console.log(this.state) Tells which story to query from the database
	}
	readStory (res) {
		this.setState({storyStarted: true, isBeginning:false}) // Should show the story
		this.nextChapter('1A');
	}
	nextChapter (newKey) {

		// if(!newKey){ // if newKey is not passed to this function
		// 	newKey = this.state.whereAmI;
		//  figure out the next chapter key
		// }

		this.setState({
			whereAmI: newKey
		});
	}
	changeAnswer (chapter, answerIndex, value) {
		var answers = Object.assign({}, this.state.answers);
		console.log(chapter + "|" + answerIndex + "|" + value); //undefined but why?
		console.log(answers); //undefined but why?
		answers[chapter][answerIndex].value = value;
		this.setState({answers: answers});
	}
	// sendAnswers(){
	// 	console.log('Sending...', this.state.answers );
	// 	// var answers = this.state.answers;
	// 	$.ajax({
	// 		url: "/send",
	// 		method: 'POST',
	// 		data: this.state.answers
	// 	})
	// 	this.readStory();
	// }
	render() {
		return (
			<div className='main-container'>
				<Header />
				<Body  {...this.state} //takes in all of App object
					onAnswerChange={this.changeAnswer.bind(this)}
					chooseStoryFn={this.chooseStory.bind(this)}
					populateStory={this.populateStory.bind(this)}
					handleSubmit={this.readStory.bind(this)}
				/>
				<Footer />
			</div>
		);
	};
}

ReactDOM.render(<App />, document.querySelector('#app'))