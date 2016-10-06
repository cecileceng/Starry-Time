import React, { Component } from 'react';

const OpenPage = (props) => {
	return (
		<div className='open-page'>
			<div className='row'>
				<div className='col-md-6 left-side'>
					<img src='../images/protagonist-girl.jpg' alt='Starry Time Protagonist' />
				</div>
				<div className='col-md-6 right-side'>
					<button className='btn btn-warning btn-lg' onClick={props.chooseStoryFn}>Start Your Adventure</button>
				</div>
			</div>
		</div>
	);
};

export default OpenPage;