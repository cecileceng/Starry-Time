import React, { Component } from 'react';
import StartBlock from './start-block';
import OpenPage from './open-page';
import Form from './form';
import StoryBlock from './story-block';

class Body extends Component {

	render() {
		var myBody;
		if (this.props.isBeginning) {
			myBody = 
				<Form {...this.props} /> //takes in all of App object / Part 2: Fill in your words readStory={props.readStory}
		} else if (this.props.storyStarted) {
			myBody = 
				<StoryBlock {...this.props} /> // Part 3: Read through the story
		} else {
			if (this.props.chooseStory) {
				myBody =
				<StartBlock populateStory={this.props.populateStory} /> // Part 1: Pick a Story
			} else {
				myBody =
				<OpenPage chooseStory={this.props.chooseStory} chooseStoryFn={this.props.chooseStoryFn} /> // Default: Starting page
			}
		}
		return (
			<div>
				{myBody}
			</div>
		);
	}
}

export default Body;

//Special note: dummy components are just for functions and don't require render()