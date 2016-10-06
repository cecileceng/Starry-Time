import React, { Component } from 'react';
import StartBlock from './start-block';
import OpenPage from './open-page';
import Form from './form';
import StoryBlock from './story-block';

const Body = (props) => {
	var myBody;
	console.log(props.storyInfo)
	if (props.isBeginning) {
		myBody = 
			<Form {...props} /> // Part 2: Fill in your words readStory={props.readStory}
	} else if (props.storyStarted) {
		myBody = 
			<StoryBlock /> // Part 3: Read through the story
	} else {
		if (props.chooseStory) {
			myBody =
			<StartBlock populateStory={props.populateStory} /> // Part 1: Pick a Story
		} else {
			myBody =
			<OpenPage chooseStory={props.chooseStory} chooseStoryFn={props.chooseStoryFn} /> // Default: Starting page
		}
	}
	return (
		<div>
			{myBody}
		</div>
	);
};

export default Body;

//Special note: dummy components are just for functions and don't require render()