import React from 'react';
import WordInput from './word-input'

const Form = (props) => {
	let outputAnswers = []; //flatten array {type:'', value:''}
	for( let pos in props.answers ) {
		let answers = props.answers[pos];
		answers.forEach( (item, i) =>{
			outputAnswers.push(<WordInput key={pos+i} position={pos} type={item.type} />)
		})
	}
	return (
		<div className='form'>
			{outputAnswers}
			<button className='btn btn-warning btn-lg'>Submit Words</button> 
		</div>
	);
}

//make form tag in form
// right answer needs to match to right word input 

export default Form;
