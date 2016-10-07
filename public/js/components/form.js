import React from 'react';
import WordInput from './word-input'

const Form = (props) => {
	let outputAnswers = []; //flatten array {type:'', value:''}
	for( let pos in props.answers ) {
		let answers = props.answers[pos];
		answers.forEach( (item, i) =>{
			outputAnswers.push(<WordInput {...props} key={pos+i} id={pos+i} chapter={pos} answerIndex={i} type={item.type} />)
		})
	}

	return (
		<div className='form'>
			{outputAnswers}
			<button onClick={props.handleSubmit} className='btn btn-warning btn-lg' >Submit Words</button> 
		</div>
	);
}

//Submit needs to take to next state/page to go to INDEXJSreadStory)

export default Form;
