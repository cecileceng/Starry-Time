import React, { Component } from 'react';
import CurrentChapter from './current-chapter';
// import Tree from './tree';

const StoryBlock = (props) => {
	return (
		<div className='story-block'>
			<div className='storytime'>
				<CurrentChapter {...props} />
			</div>
			<div className='options'>
					//optionA
					<br />
					//optionB
			</div>
		</div>
	);
};

export default StoryBlock;