import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MainContainer from './component/main-container';
import Header from './components/header';
import Body from './components/body';
import StartBlock from './components/start-block';
import FillIns from './components/fill-ins';
import WordInput from './components/word-input';
import Form from './components/form';
import StoryBlock from './components/stock-block';
import Tree from './components/tree';
import CurrentChapter from './components/current-chapter';
import Footer from './components/footer';
import App from './app/app';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isBeginning: false
		};
	};
	render() {
		return (
			<MainContainer />
		);
	};
}

ReactDOM.render(<App />, document.querySelector('.main-container'))