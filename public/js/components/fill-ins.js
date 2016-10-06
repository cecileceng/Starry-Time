import React, { Component } from 'react';
import WordInput from './word-input';
import Form from './form';
// props.storyInfo[0].blank needs be called
// sort array of objects in db to be in order and grab the blank from the array and put it on the screen
//.map react look up

const FillIns = (props) => {
	return (
		<div className='fill-ins'>
			<WordInput />
			<Form {...props} />
		</div>
	);
};

export default FillIns;

