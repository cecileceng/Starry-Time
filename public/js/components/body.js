import React, { Component } from 'react';
import StartBlock from './start-block';
import OpenPage from './open-page';
// import FillIns from './fill-ins';
// import WordInput from './word-input';
// import Form from './form';
// import StoryBlock from './stock-block';
// import Tree from './tree';
// import CurrentChapter from './current-chapter';

const Body = (props) => {
	var myBody;
	//render() {   this is being rendered in the index.js right?
	if (props.isBeginning) { //false/true declaration?
		myBody = 
			<FillIns /> // Part 2
	} else if(props.storyStarted) {
		myBody = 
			<StoryBlock /> // Part 3
	} else {
		if (props.chooseStory) {
			myBody =
			<StartBlock chooseStory={props.chooseStory} chooseStoryFn={props.chooseStoryFn} /> // Pick Story
		} else {
			myBody =
			<OpenPage chooseStory={props.chooseStory} chooseStoryFn={props.chooseStoryFn} /> // Default
		}
	}
	return (
		<div>
			{myBody}
		</div>
	);
};

export default Body;

//dummy components are just for functions