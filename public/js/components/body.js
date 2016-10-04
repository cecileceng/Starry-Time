import React from 'react';

const Body = ({}) => {
	var myBody; 
	//render() {   this is being rendered in the index.js right?
	if (this.state.isBeginning) { //false/true declaration?
		myBody = 
			<FillIns /> // Part 2
	} else if(this.state.storyStarted) {
		myBody = 
			<StoryBlock /> // Part 3
	} else {
		myBody =
			<StartBlock /> // Default
	}
	return (
		<div>
			{myBody}
		</div>
	);
};

export default Body;