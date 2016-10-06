import React from 'react';

const CurrentChapter = (props) => {
	return (
		<div className='current-chapter'>
			{props.chapterText}
		</div>
		<div className='options'>
			{props.optionA} 
			<br />
			{props.optionB}
		</div>
	);
};

export default CurrentChapter;

//needs to populate current chapter, options need to make a change to the current chapter