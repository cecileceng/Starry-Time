import React from 'react';

const CurrentChapter = ({}) => {
	return (
		<div className='current-chapter'>
			{this.state.chapterText}
		</div>
		<div className='options'>
			{this.state.optionA}
			<br />
			{this.state.optionB}
		</div>
	);
};

export default CurrentChapter;

//how to call line 6?s