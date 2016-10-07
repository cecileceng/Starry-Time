import React, { Component } from 'react';

class WordInput extends Component {
	constructor(props) {
		super(props);
		this.type = props.type;
		this.id = props.id;
		this.chapter = props.chapter;
		this.answerIndex = props.answerIndex;

		this.onInputChange = this.onInputChange.bind(this);
	};
	render() {
		// console.log(this.state);
		return (
			<div className="wordInput">
				<h1>{this.type.replace(/[_<>]/g, " ")}</h1>
				<input id={this.id} type="text" onChange={this.onInputChange} value={this.getAnswerValue()}  /> 
			</div>
		)
	}
	onInputChange(event) {
		this.props.onAnswerChange(this.chapter, this.answerIndex, event.target.value);
		// console.log(event.target.value);
		// this.setAnswerValue(event.target.value);
		// console.log(this.props);
	}
	getAnswerValue() {
		return this.props.answers[this.chapter][this.answerIndex].value;
	}
	// setAnswerValue(value) {
	// 	this.props.answers[this.chapter][this.answerIndex].value = value; 
	// }
};


export default WordInput;
//onClick={readStory.bind(this, '1A', props)}