import React, { Component } from 'react';

const OpenPage = (props) => {
	return (
		<div className='open-page' id='inner'>
			<div className='row'>
				<div className='col-md-6 left-side'>
					{/*<img src='../images/protagonist-girl.jpg' alt='Starry Time Protagonist' />*/}
					<h3>Welcome to the wonderful world of Starry Time where you are the star of your own personalized story -- make different choices to get different endings!</h3>
				</div>
				<div className='col-md-6 right-side' id='oppressed'>
					<button className='btn btn-warning btn-lg' id='iLikeBigButtonsAndICannotLie' onClick={props.chooseStoryFn}>Start Your Adventure</button>
				</div>
			</div>
		</div>
	);
};

export default OpenPage;