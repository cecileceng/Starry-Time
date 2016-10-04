import React from 'react';

class MyForm extends React.Component {
	constructor(props) {
		super(props);    
		this.state = {value: 'Hello!'};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({value: event.target.value});
	}

	render() {
		return (
			<input
				type="text"
				value={this.state.value}
				onChange={this.handleChange}
			/>
		);
	}
}

// const Form = ({}) => {
// 	return (
// 		//use a loop to render multiple word inputs
// 		//stuff
// 	);
// };

export default Form;
