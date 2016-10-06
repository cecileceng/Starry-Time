import React, { Component } from 'react';
// import Tree from './tree';
// import CurrentChapter from './current-chapter';

const StoryBlock = ({}) => {
	return (
		<div className='story-block'>
			<div className='row'>
				<div className='col-md-6 left-side storytime'>
					<CurrentChapter />
					<br />
					//optionA
					<br />
					//optionB
				</div>
				<div className='col-md-6 right-side'>
					<Tree />
				</div>
			</div>
		</div>
	);
};
// 	return (
// 		<div className='story-block'>
// 			<div className='row'>
// 				<div className='col-md-7 story-page'>
// 					myText={this.state.currentStoryParagraph}
// 				</div>
// 				<div className='col-md-5 tree-tier'>
// 					<img src='../images/starter-tree.jpg' alt='Pick Your Path' />
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

export default StoryBlock;

//line 8 figure out way to input database text? also need to setState
//line 11 how to import image from database

//vs storyblock = <CurrentChapter /> <Tree />