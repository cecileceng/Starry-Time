import React from 'react';

const StartBlock = ({}) => {
	return {
		<div className='start-block'>
			<div className='row'>
				<div className='col-md-6 left-side'>
					<img src='../images/protagonist-girl.jpg' alt='Starry Time Protagonist' />
				</div>
				<div className='col-md-6 right-side'>
					<h3>Start Your Adventure</h3>
					<h4>Select your story book</h4>
					<ul>
						<li><img src='../images/radiant-forest-book-cover.jpg' alt='The Radiant Forest Story' onClick={this.setState({isBeginning: true})} /></li> 
						<li><img src='../images/placeholder-book-cover.jpg' alt='Coming Soon' /></li>
					</ul>
				</div>
			</div>
		</div>
	};
};

export default StartBlock;

//need to find way on line 13 to point to database story