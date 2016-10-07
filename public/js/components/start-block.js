import React, { Component } from 'react';
import $ from 'jquery';

const selectStory = (storyBook, props) => {
	$.get('/blanks?storybook='+ storyBook, function(data) {
		var myData = JSON.parse(data);
		props.populateStory(myData);
		function compare(a,b) {
			if (a.id < b.id)
				return -1;
			if (a.id > b.id)
				return 1;
			return 0;
		}
		myData.sort(compare);
		//console.log(myData);  gives back array of objects
	});
}

const StartBlock = (props) => {
	return (
		<div className='start-block' id='inner'>
			<div className='row'>
				<div className='col-md-6 left-side'>
					<img src='../images/protagonist-girl.jpg' alt='Starry Time Protagonist' />
				</div>
				<div className='col-md-6 right-side'>
					<h3>Start Your Adventure</h3>
					<h4>Select your story book</h4>
					<ul>
						<li><img src='../images/radiant-forest-book-cover.jpg' alt='The Radiant Forest Story' onClick={selectStory.bind(this, 'Radiant-Forest', props)} /></li> 
						<li><img src='../images/placeholder-book-cover.jpg' alt='Coming Soon' /></li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default StartBlock;

//need to find way to point to database story