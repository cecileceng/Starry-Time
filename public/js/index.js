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
			whereAmI: null,
			answers: null,
		};
	};
	chooseStory () {
		this.setState({chooseStory: true}) // Pulls up selectable stories in StartBlock
	}
	populateStory (res) {
		var answers = {};
		var chapters = res; // Local variable is res from ...
		for (var i = 0; i < chapters.length; i++) {
			var tokens = chapters[i].chapterText.match(/(<\w+>)/g);
			answers[chapters[i].position] = []; // using chapter key initialize empty array
			// answers.[](chapters.position) invokes bracket function and passing in chap
			for (var j = 0; j < tokens.length; j++) {
				answers[chapters[i].position].push({type:tokens[j], value:""}); //will be modified later
				console.log(answers)
			}
		}
		this.setState({storyInfo: res, isBeginning: true, answers: answers});
		console.log(this.state) // Tells which story to query from the database
	}
	readStory (res) {
		this.setState({storyStarted: true}) // Should show the story
	}
	whereAmI () {
		this.setState({tree: res}) // Should tell us which "position" we're in so we can populate the tree
	}
	render() {
		return (
			<div className='main-container'>
				<Header />
				<Body  {...this.state} //takes in all of App object
					chooseStoryFn={this.chooseStory.bind(this)}
					populateStory={this.populateStory.bind(this)}
				/>
				<Footer />
			</div>
		);
	};
}

ReactDOM.render(<App />, document.querySelector('#app'))