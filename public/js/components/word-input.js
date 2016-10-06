import React, { Component } from 'react';

// class WordInput extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.
// 	};
// 	render() {
// 		return (
// 			<div>
// 				<h1>{props.type.replace(/[_<>]/g, " ")}</h1>
				
// 			</div>
// 		)
// 	}
// };


const WordInput = (props) => {
	return (
		<div>
			<h1>{props.type.replace(/[_<>]/g, " ")}</h1>
		</div>
	)
}


//store chapter on each word element
//wordInput class-based component
//{inputs}
// create inputs array
//whatever I am sending to form
//storeID
//matching right value in state to right input
// similar to udemy youtube exercise

export default WordInput;
//onClick={readStory.bind(this, '1A', props)}