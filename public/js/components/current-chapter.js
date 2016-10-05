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

//how to call line 6?s